const mongoose = require("mongoose");

const Course = mongoose.model("course");
const utils = require("../utils/Utils");

/**
 * @file course routes to handle course API
 * @module coursesRoutes
 */

module.exports = app => {
  /**
   * create a new course on db
   */
  app.post("/api/courses", async (req, res) => {
    const { name, description } = req.body;
    console.log(req.body);
    const course = new Course({
      name: name,
      description: description,
      dateCreated: Date.now(),
      _user: req.user.id
    });
    try {
      await course.save();
      res.status(200);
    } catch {
      res.status(404);
    }
  });

  /**
   * fetch courses by filter params
   */
  app.get("/api/courses", async (req, res) => {
    const query = buildQueryObject(req);

    console.log(query);

    if (utils.isEmpty(query)) {
      res.sendStatus(400);
    } else {
      try {
        const courses = await Course.find(query)
          .populate("_user")
          .exec();
        res.send(courses);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * get a single course by id
   */
  app.get("/api/courses/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        const course = await Course.findById({
          _id: req.params.id
        })
          .populate("_user")
          .exec();
        res.send(course);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });
};

/**********************Helpers**************************************/
function buildQueryObject(req) {
  const { name } = req.query;
  const query = {};
  if (req.query.hasOwnProperty("name")) {
    const nameRegex = new RegExp(name, "i");
    query.name = nameRegex;
  }
  return query;
}
