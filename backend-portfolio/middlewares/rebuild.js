const rebuildAuth = (req, res, next) => {
  const rebuildSecret = req.headers['x-admin-secret'];
  if (!rebuildSecret || rebuildSecret !== process.env.REBUILD_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

module.exports = { rebuildAuth };