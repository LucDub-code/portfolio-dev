const mongoose = require('mongoose');

const aiKnowledgeSchema = new mongoose.Schema({
  content: { type: String, required: true },
  questions: { type: [String], required: true },
  keywords: { type: [String], required: true },
  source: { type: String, required: true },
  embedding: { type: [Number], required: true },
  content_hash: { type: String, required: true }
});

module.exports = mongoose.model('AiKnowledge', aiKnowledgeSchema, 'ai_knowledge');