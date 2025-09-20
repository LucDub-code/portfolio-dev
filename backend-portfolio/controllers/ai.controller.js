const { embed } = require('ai');
const { mistral } = require('@ai-sdk/mistral');
const crypto = require('crypto');
const AiKnowledge = require('../models/ai-knowledge.model');
const knowledgeData = require('../ai_knowledge/ai_knowledge');

// Controller de peuplement de la base de données avec des embeddings recalculés

const calculateContentHash = (content) => {
  return crypto.createHash('sha256').update(content).digest('hex');
};

const rebuildEmbeddings = async (req, res) => {

  try {
    let processedCount = 0;

    for (const data of knowledgeData) {

      if (!data.content || !data.source) {
        console.warn(`Données manquantes pour la source: ${data.source}`);
        continue;
      }

      const fullText = `${data.content} ${data.questions.join(' ')} ${data.keywords.join(' ')}`;
      const { embedding } = await embed({
        model: mistral.textEmbedding('mistral-embed'),
        value: fullText
      });

      const contentHash = calculateContentHash(data.content);

      await AiKnowledge.findOneAndUpdate(
        { source: data.source },
        {
          content: data.content,
          source: data.source,
          embedding: embedding,
          content_hash: contentHash
        },
        { upsert: true, new: true }
      );

      processedCount++;
    }

    res.json({
      message: `${processedCount} documents traités`,
      processed: processedCount
    });
  } catch (error) {
    console.error('Erreur lors de la reconstruction des embeddings:', error);
    res.status(500).json({
      error: 'Erreur interne du serveur',
      message: 'Impossible de traiter les embeddings'
    });
  }
};

// Controller de génération d'embeddings du prompt utilisateur
// Recherche vectorielle dans la base de connaissances

const chat = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({
        error: 'Prompt requise',
        message: 'Veuillez fournir un prompt valide'
      });
    }

    const { embedding: prompt_embedding } = await embed({
      model: mistral.textEmbedding('mistral-embed'),
      value: prompt
    });

    const searchResults = await AiKnowledge.aggregate([
      {
        $vectorSearch: {
          index: "ai_knowledge_vec_idx",
          path: "embedding",
          queryVector: prompt_embedding,
          numCandidates: 10,
          limit: 3
        }
      },
      {
        $project: {
          content: 1,
          source: 1,
          score: { $meta: "vectorSearchScore" }
        }
      }
    ]);

    const threshold = 0.895;

    if (searchResults.length === 0 || searchResults[0].score < threshold) {
      return res.json({
        prompt: prompt,
        response: "Je suis désolé, mais je ne peux répondre qu'aux questions concernant Lucas Dubeau, son profil professionnel et ce portfolio. Pourriez-vous reformuler votre question?",
        relevantDocuments: [],
        score: searchResults[0]?.score || 0,
        threshold: threshold
      });
    }

    const context = searchResults.map(doc => doc.content).join('\n---\n');

    const systemMessage = `Tu es Vigeo, l'assistant IA du portfolio de Lucas Dubeau. Tu vouvoies TOUJOURS
    les utilisateurs et adoptes un style formel et professionnel. Tu réponds uniquement aux questions
    concernant Lucas Dubeau, son profil professionnel et ce portfolio.

    Voici le contexte des informations pertinentes :
    ${context}

    Question de l'utilisateur : ${prompt}

    Réponds de manière professionnelle et précise en te basant uniquement sur le contexte fourni.`;

    res.json({
      prompt: prompt,
      systemMessage: systemMessage,
      relevantDocuments: searchResults.map(doc => ({ source: doc.source, score: doc.score })),
      message: 'Système de messages préparé - prêt pour génération IA'
    });

  } catch (error) {
    console.error('Erreur lors de la génération de l\'embedding:', error);
    res.status(500).json({
      error: 'Erreur interne du serveur',
      message: 'Impossible de traiter le prompt'
    });
  }
};

module.exports = {
  rebuildEmbeddings,
  chat
};