const mongoose = require("mongoose");

const User = mongoose.model("users");
const utils = require("../utils/Utils");

module.exports = app => {
  /**
   * fetch users by filter params
   */
  app.get("/api/users", async (req, res) => {
    const query = buildQueryObject(req);
    if (utils.isEmpty(query)) {
      res.sendStatus(400);
    } else {
      try {
        const users = await User.find(query);
        res.send(users);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });
};

function buildQueryObject(req) {
  const { name } = req.query;
  const query = {};
  if (req.query.hasOwnProperty("name")) {
    const nameRegex = new RegExp(name, "i");
    query.name = nameRegex;
  }
  return query;
}
