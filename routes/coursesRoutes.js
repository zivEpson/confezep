const mongoose = require("mongoose");

const Course = mongoose.model("course");

module.exports = app => {
  app.post("/api/courses", async (req, res) => {
    const { name, questionsIds } = req.body;

    const course = new Course({
      name,
      dateCreated: Date.now(),
      _user: req.user.id,
      _questionsIds: questions
    });
    try {
      await course.save();
      res.status(200);
    } catch {
      res.status(404);
    }
  });
};
