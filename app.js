const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const User = require("./models/user");

// MongoDB connection
mongoose.connect(process.env.DB_HOST, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "mongo connection error"));

// view engine setup
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routing
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/login", indexRouter);
app.use("/logout", indexRouter);
app.use("/newMessage", indexRouter);
app.use("/register", indexRouter);

// initialize passport
const passportModel = require("./public/javascripts/passport");

passport.use(passportModel.authenticateUser);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
