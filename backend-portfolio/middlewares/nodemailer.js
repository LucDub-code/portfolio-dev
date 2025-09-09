const nodemailer = require('nodemailer');

// Configuration du transporteur de mail
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Fonction d'envoi de mail

const sendEmail = (req, res) => {
  const { name, email, message } = req.body;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `Lucas Dubeau <${process.env.EMAIL_USER}>`,
    subject: `Nouveau message de ${name} [Portfolio - lucasdubeau.dev] `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📧 Nouveau message
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 10px;">👤 Informations du contact</h3>
            <p style="margin: 5px 0;"><strong>Nom :</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 10px;">💬 Message</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
            <p>Message envoyé depuis le formulaire contact de lucasdubeau.dev</p>
            <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      </div>
    `
  };
  
  transporter.sendMail(mailOptions)
    .then(() => {res.status(200).json({ message: 'Email envoyé avec succès' });})
    .catch(() => {res.status(500).json({ error: 'Erreur lors de l\'envoi' });});
};

module.exports = { sendEmail };