const mongoose = require("mongoose");

const Question = mongoose.model("question");

module.exports = app => {
  app.post("/api/questions", async (req, res) => {
    const { title, body, answer } = req.body;

    const question = new Question({
      title,
      body,
      answer,
      _user: req.user.id,
      dateCreated: Date.now()
    });
    try {
      await question.save();
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

  app.get("/api/questions", async (req, res) => {
    const query = buildQueryObject(req);

    if (isEmpty(query)) {
      res.sendStatus(400);
    } else {
      try {
        const questions = await Question.find(query);
        res.send(questions);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  // Helpers
  function buildQueryObject(req) {
    const { title } = req.query;

    const query = {};
    if (req.query.hasOwnProperty("title")) {
      const titleRegex = new RegExp(title, "i");
      query.title = titleRegex;
    }

    return query;
  }

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
};
