const express = require('express');
const router = express.Router();
const { sendEmail } = require('../middlewares/nodemailer');
const limiter = require('../middlewares/ratelimit');

router.post('/', limiter, sendEmail);

module.exports = router;