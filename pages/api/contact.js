import sgMail from '@sendgrid/mail';

export default function (req, res) {
  sgMail.setApiKey(process.env.EMAILAPI);
  const text = `${req.body.name}\n${req.body.email}\n${req.body.message}`;
  const mail = {
    to: process.env.DESTEMAIL,
    from: process.env.EMAIL,
    subject: 'Portfolio Mail',
    text,
  };

  return new Promise((resolve, reject) => {
    sgMail.send(mail)
      .then(() => {
        console.log(mail);
        return res.status(200).end;
      })
      .catch(() => {
        console.log('error');
        return res.status(500).end;
      });
  });
}
