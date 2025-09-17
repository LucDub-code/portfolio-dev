const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Identifiants incorrects" });
  }
  
  const token = jwt.sign(
    { userId: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  res.status(200).json({ token });
};

exports.verify = (req, res) => {
  res.status(200).json({ 
    valid: true, 
    message: "Token valide" 
  });
};