const mongoose = require("mongoose");
const UserSubscriptions = mongoose.model("userSubscriptions");

module.exports = app => {
  /**
   * create new user subscription
   */
  app.post("/api/user_subscriptions/courses", async (req, res) => {
    const { _id } = req.body;
    if (_id === null) {
      res.sendStatus(400);
    } else {
      const userSubscription = new UserSubscriptions({
        _user: req.user.id,
        dateCreated: Date.now()
      });
      userSubscription.courseSubscriptions.push({
        _course: _id,
        dateCreated: Date.now()
      });
      try {
        await userSubscription.save();
        res.sendStatus(200);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * get user subscription by user id
   * todo - need to populate courses
   */
  app.get("/api/user_subscriptions/courses", async (req, res) => {
    try {
      const userSubscription = await UserSubscriptions.findOne({
        _user: req.user.id
      })
        .populate("_user")
        .exec();
      res.send(userSubscription);
    } catch (err) {
      res.sendStatus(500);
    }
  });
};
