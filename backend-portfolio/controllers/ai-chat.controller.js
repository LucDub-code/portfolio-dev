const { embed, streamText } = require('ai');
const { mistral } = require('@ai-sdk/mistral');
const AiKnowledge = require('../models/ai-knowledge.model');

// Génération d'embeddings du prompt utilisateur
// Recherche vectorielle dans la base de connaissances
// Construction du message système 
// Envoi au modèle et réponse stream via la ai-sdk

const chat = async (req, res) => {
  try {
    const { messages } = req.body;
    const lastUserMessage = messages[messages.length - 1];
    const prompt = lastUserMessage.parts[0].text;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'Messages requis',
        message: 'Veuillez fournir des messages valides'
      });
    }

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({
        error: 'Prompt requis',
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
      const errorResult = await streamText({
        model: mistral('mistral-small-latest'),
        messages: [{
          role: 'assistant',
          content: "Désolé, mais je ne réponds qu'aux questions concernant Lucas Dubeau, son profil professionnel et ce portfolio. Pourriez-vous reformuler votre question?"
        }]
      });
      return errorResult.pipeUIMessageStreamToResponse(res);
    }

    const context = searchResults.map(doc => doc.content).join('\n---\n');

    const systemMessage = `Tu es Vigeo, l'assistant IA du portfolio de Lucas Dubeau.

    INSTRUCTION :
    - Tu vouvoies TOUJOURS les utilisateurs
    - Style formel et professionnel
    - Tu réponds UNIQUEMENT aux questions sur Lucas Dubeau et son portfolio
    - Base-toi EXCLUSIVEMENT sur le contexte fourni
    - Si l'information n'est pas dans le contexte, réponds à l'utilisateur que tu n'as pas cette information
    - Ne fais AUCUNE supposition ou invention d'information
    - Sois concis et précis dans tes réponses

    CONTEXTE : ${context}`;

    const result = await streamText({
      model: mistral('mistral-small-latest'),
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content: systemMessage
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    return result.pipeUIMessageStreamToResponse(res);

  } catch (error) {
    console.error('Erreur lors de la génération de la réponse:', error);
    res.status(500).json({
      error: 'Erreur interne du serveur',
      message: 'Impossible de traiter le prompt'
    });
  }
};

module.exports = {
  chat
};