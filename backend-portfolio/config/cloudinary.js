const { v2: cloudinary } = require('cloudinary');

// Configuration de Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fonction pour créer une signature sécurisée pour les requêtes à Cloudinary

const createSignature = (params) =>
  cloudinary.utils.api_sign_request(params, process.env.CLOUDINARY_API_SECRET);

// Exporter la configuration et les fonctions

module.exports = {
  cloudinary,
  createSignature,
};
