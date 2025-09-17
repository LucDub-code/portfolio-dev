const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.get('/verify', auth, authController.verify);

module.exports = router;