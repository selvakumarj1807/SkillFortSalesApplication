const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();
const CLIENT_URL = process.env.CLIENT_URL;

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/userSignin", session: true }),
  (req, res) => {

    const user = req.user;

    // create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // redirect to React with data
    res.redirect(
      `${CLIENT_URL}/google-success?token=${token}&userId=${user._id}&name=${user.name}&email=${user.email}&picture=${user.picture}&firstName=${user.firstName}&lastName=${user.lastName}`
    );
  }
);

module.exports = router;