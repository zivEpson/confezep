const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  title: String,
  questionBody: String,
  answer: String,
  dateCreated: Date,
  dateModified: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("question", questionSchema);
