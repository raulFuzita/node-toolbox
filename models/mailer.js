const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

exports.sendEmail = async () => {

    const email = process.env.EMAIL
    const password = process.env.EMAIL_PASSWORD
    const sender = process.env.EMAIL_SENDER
    const recipient = process.env.EMAIL_RECIPIENT

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports / flase for 587
    auth: {
      user: email, // generated ethereal user
      pass: password, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${sender}" <${email}>`, // sender address
    to: recipient, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return {
      messageSent: info.messageId,
      previewURL: nodemailer.getTestMessageUrl(info)
  }
}