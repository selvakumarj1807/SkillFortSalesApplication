const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require("path");
const passport = require("passport");
const session = require("express-session");

require("dotenv").config();
require("./config/passport");

const gmailAuthRoutes = require("./routes/auth");

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://skill-fort-sales-application.vercel.app"
  ],
  credentials: true
}));


// ✅ Enable CORS for localhost and deployed frontend
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "js")));

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.set("trust proxy", 1);

const authRoutes = require("./routes/authRoutes");
// ✅ NEW: Email Route
const emailRoutes = require("./routes/emailRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");


app.use("/api/auth", authRoutes);

app.use("/auth", gmailAuthRoutes);

// ✅ NEW EMAIL ROUTE
app.use("/api/email", emailRoutes);

app.use("/api/password", passwordResetRoutes);

app.use(errorMiddleware);

module.exports = app; 