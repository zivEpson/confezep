const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  isAdmin: Boolean,
  dateCreated: Date,
  dateModified: Date
});

mongoose.model("users", userSchema);
