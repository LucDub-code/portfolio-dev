const { embed } = require('ai');
const { mistral } = require('@ai-sdk/mistral');
const crypto = require('crypto');
const AiKnowledge = require('../models/ai-knowledge.model');
const knowledgeData = require('../ai_knowledge/ai_knowledge');

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
      
      const { embedding } = await embed({
        model: mistral.textEmbedding('mistral-embed'),
        value: data.content
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

module.exports = {
  rebuildEmbeddings
};