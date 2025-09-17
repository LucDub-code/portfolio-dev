const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cloudinaryController = require('../controllers/cloudinary.controller');

router.post('/sign', auth, cloudinaryController.signUpload);

module.exports = router;

