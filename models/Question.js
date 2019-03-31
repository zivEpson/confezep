const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  title: String,
  body: String,
  answer: String,
  dateCreated: Date,
  dateModified: Date,
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("question", questionSchema);
