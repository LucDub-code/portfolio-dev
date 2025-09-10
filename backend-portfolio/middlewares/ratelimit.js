const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: { message: 'Trop de requêtes, réessayez dans 15 minutes' },
});

module.exports = limiter;