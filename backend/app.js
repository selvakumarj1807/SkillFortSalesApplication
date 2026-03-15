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


// ✅ Enable CORS for localhost and deployed frontend
app.use(express.json());
app.use(cors());
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

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.use("/auth", gmailAuthRoutes);


app.use(errorMiddleware);

module.exports = app; 