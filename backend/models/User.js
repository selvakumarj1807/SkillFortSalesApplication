const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  firstName: {type: String},
  lastName: {type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String },

  googleId: String,
  name: String,
  picture: String
});

module.exports = mongoose.model("User", UserSchema);
