const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { nom, prenom, message } = req.body;

  try {
    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou autre service de messagerie
      auth: {
        user: 'votre_email@gmail.com', // Votre adresse e-mail
        pass: 'votre_mot_de_passe', // Votre mot de passe ou un mot de passe d'application
      },
    });

    // Options de l'e-mail
    const mailOptions = {
      from: 'votre_email@gmail.com',
      to: 'votre_destination@gmail.com', // Adresse e-mail de destination
      subject: 'Nouveau message de contact',
      text: `Nom: ${nom}\nPrénom: ${prenom}\nMessage: ${message}`,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).send('E-mail envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
