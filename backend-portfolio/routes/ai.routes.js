const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');
const aiChatController = require('../controllers/ai-chat.controller');
const { rebuildAuth } = require('../middlewares/rebuild');

router.post('/rebuild-embeddings', rebuildAuth, aiController.rebuildEmbeddings);
router.post('/chat', aiChatController.chat);

module.exports = router;
