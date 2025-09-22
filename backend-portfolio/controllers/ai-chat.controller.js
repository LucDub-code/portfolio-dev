const { embed, streamText } = require('ai');
const { mistral } = require('@ai-sdk/mistral');
const AiKnowledge = require('../models/ai-knowledge.model');

// Normalisation du prompt utilisateur
function normalizePrompt(prompt) {
    // Capitalise la première lettre
    let normalized = prompt.charAt(0).toUpperCase() + prompt.slice(1);

    // Remplace "lucas" par "Lucas"
    normalized = normalized.replace(/\blucas\b/gi, 'Lucas');

    return normalized;
  }

// Génération d'embeddings du prompt utilisateur
// Recherche vectorielle dans la base de connaissances 
// Système d'acceptation ou de rejet des requêtes en input
// Construction du message système 
// Envoi du prompt et du message systeme au modèle et réponse en stream via la ai-sdk

const chat = async (req, res) => {
  try {
    const { messages } = req.body;
    const lastUserMessage = messages[messages.length - 1];
    const prompt = lastUserMessage.parts[0].text;

    const normalizedPrompt = normalizePrompt(prompt);

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
      value: normalizedPrompt
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

    const errorSystemMessage = `Tu es Vigeo, l'assistant IA du portfolio de Lucas Dubeau. 
    
    CONTEXTE: L'utilisateur a posé une question hors sujet (non liée à Lucas Dubeau ou son portfolio).
    
    MISSION: Refuse poliment et redirige vers les sujets autorisés.
    
    INSTRUCTION :
    - Tu vouvoies TOUJOURS les utilisateurs
    - Style formel et professionnel
    - Explique que tu ne réponds qu'aux questions sur Lucas Dubeau et son portfolio
    - Invite à reformuler avec une question pertinente
    - Sois concis et précis dans tes réponses`;
    
    const threshold = 0.875;

    if (searchResults.length === 0 || searchResults[0].score < threshold) {
      const errorResult = await streamText({
        model: mistral('mistral-small-latest'),
        messages: [
          {
            role: 'system',
            content: errorSystemMessage
          },
          {
            role: 'user',
            content: `Question hors sujet à refuser : "${normalizedPrompt}"`
          }]
        });
        return errorResult.pipeUIMessageStreamToResponse(res);
      }
      
      const context = searchResults.map(doc => doc.content).join('\n---\n');
      
      const systemMessage = `Tu es Vigeo, l'assistant IA du portfolio de Lucas Dubeau.
      
      INSTRUCTION :
      - Tu vouvoies TOUJOURS les utilisateurs
      - Style formel et professionnel
      - Tu réponds UNIQUEMENT aux questions PROFESSIONNELLES sur Lucas Dubeau et son portfolio
      - Refuse toute question sur sa vie privée, ses opinions personnelles, ou tout aspect non-professionnel
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
          content: normalizedPrompt
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