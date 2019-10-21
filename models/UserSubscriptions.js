const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * @file User Subscriptions module schema setup
 * @module userSubscriptions
 */

const courseSubscriptionSchema = new Schema({
  _course: { type: Schema.Types.ObjectId, ref: "course" },
  dateCreated: Date,
  dateModified: Date
});

const userSubscriptionsSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  courseSubscriptions: [courseSubscriptionSchema],
  dateCreated: Date,
  dateModified: Date
});

mongoose.model("userSubscriptions", userSubscriptionsSchema);
