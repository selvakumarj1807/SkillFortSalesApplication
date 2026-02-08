const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require("path");


// ✅ Enable CORS for localhost and deployed frontend
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "js")));


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


app.use(errorMiddleware);

module.exports = app; 