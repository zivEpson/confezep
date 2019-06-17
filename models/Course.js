const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * @file course module schema setup
 * @module courseSchema
 */

// create a subdocument of {order: Number, question {{ type: Schema.Types.ObjectId, ref: "Question" }}}. allow you to set the order of the question.
const courseSchema = new Schema({
  name: String,
  dateCreated: Date,
  dateModified: Date,
  _questionsIds: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("course", courseSchema);
