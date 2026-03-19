// routes/emailRoutes.js

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// EMAIL VALIDATION
const isValidEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
};

// SEND EMAIL
router.post("/send", async (req, res) => {

  const { email } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Enter valid Gmail address"
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "selvakumarj1807@gmail.com",
        pass: "bffnoatyszeuclqx"
      }
    });

    const mailOptions = {
      from: "selvakumarj1807@gmail.com",
      to: email,
      subject: "Welcome 🎉",
      text: `Welcome! Your email has been successfully registered at SkillFort Sales Application 🎉`
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Welcome email sent successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email sending failed"
    });
  }
});

module.exports = router;