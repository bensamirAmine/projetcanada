export default function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aad8bd60a39265",
      pass: "5b5edc63dc7f4a",
    },
  });
  const mailData = {
    from: "contact.projetcanada@gmail.com",
    to: "bensamir97@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("Erroooooor", err);
    else console.log("okkkkkkk", info);
  });
  res.status(200);
  console.log(req.body);
}
