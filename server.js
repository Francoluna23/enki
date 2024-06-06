const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});  

app.use(cors());
const upload = multer();

app.post('/enviar-correo', upload.none(), async (req, res) => {
  const { consulta, correo } = req.body;
  console.log('Datos recibidos en el servidor:');
  console.log('Correo:', correo);
  console.log('Consulta:', consulta);

  try {
      const transporter = nodemailer.createTransport({
          host: 'smtp.office365.com',
          port: 587,
          secure: false,
          auth: {
              user: '',
              pass: process.env.MAIL_PASS,
          },
      });

      const result = await transporter.sendMail({
          from: process.env.MAIL_USER,
          to: '',
          subject: 'Nueva consulta',
          text: `Correo: ${correo}\nConsulta: ${consulta}`,
      });

      console.log(JSON.stringify(result, null, 4));
      res.status(200).send('Correo enviado correctamente');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
  }
});
