const mongoose = require("mongoose");

const Question = mongoose.model("question");

module.exports = app => {
  app.post("/api/questions", async (req, res) => {
    const { questionTitle, questionBody, questionAnswer } = req.body;

    const question = new Question({
      title: questionTitle,
      questionBody,
      answer: questionAnswer,
      _user: req.user.id,
      dateCreated: Date.now()
    });
    try {
      const que = await question.save();
      res.status(200).send();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/questions", async (req, res) => {
    // const questions = await Question.find({});
    // get user by user
    const questions = await Question.find({ _user: req.user.id });
    res.send(questions);
  });
};
