const { createSignature } = require('../config/cloudinary');

exports.signUpload = (req, res) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = process.env.CLOUDINARY_UPLOAD_FOLDER;
  const signature = createSignature({ timestamp, folder });

  res.json({
    timestamp,
    folder,
    signature,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  });
};
