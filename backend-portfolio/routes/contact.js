const express = require('express');
const router = express.Router();
const { sendEmail } = require('../middlewares/nodemailer');

router.post('/', sendEmail);

module.exports = router;