const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User"); // adjust path
const bcrypt = require("bcryptjs");


const express = require("express");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let otpStorage = {};

router.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
        const msg = {
            to: email,
            from: "selvakumarj1807@gmail.com", // ✅ MUST be verified
            subject: "Password Reset OTP",
            text: `Your OTP is ${otp}`,
        };

        await sgMail.send(msg);

        otpStorage[email] = otp;

        res.json({ success: true, message: "OTP sent successfully" });

    } catch (err) {
        console.error("SENDGRID ERROR:", err.response?.body || err.message);

        res.status(500).json({
            success: false,
            message: "Email failed",
            error: err.message
        });
    }
});

// ✅ VERIFY OTP
router.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;

    if (otpStorage[email] == otp) {
        return res.json({ success: true, message: "OTP verified" });
    }

    res.json({ success: false, message: "Invalid OTP" });
});

// ✅ CHANGE PASSWORD
router.post("/change-password", async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        delete otpStorage[email]; // clear OTP

        res.json({ success: true, message: "Password updated" });

    } catch (err) {
        console.error("EMAIL ERROR:", err);
        res.status(500).json({ message: "Error updating password" });
    }
});

module.exports = router;