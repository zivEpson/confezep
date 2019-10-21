const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Course");
require("./models/Question");
require("./models/UserSubscriptions");
require("./services/passport");

//db
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .catch(error => console.log("Mogoose connection error"));
//express
const app = express();
//middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//require the routes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/coursesRoutes")(app);
require("./routes/questionRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/userSubscriptionRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // express will serve up production assets like main.js, or main.css.
  app.use(express.static("client/build"));

  // serve up index.html file if it doesn’t recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//on production mode .PORT will be populated
const PORT = process.env.PORT || 5000;
app.listen(PORT);
