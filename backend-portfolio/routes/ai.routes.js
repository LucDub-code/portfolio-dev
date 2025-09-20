const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');
const { rebuildAuth } = require('../middlewares/rebuild');

router.post('/rebuild-embeddings', rebuildAuth, aiController.rebuildEmbeddings);
router.post('/chat', aiController.chat);

module.exports = router;
