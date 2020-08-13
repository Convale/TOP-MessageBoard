const passport = require("passport");
const messageModel = require("../models/message");

// GET main page
exports.index = (req, res) => {
  messageModel
    .find({})
    .sort("-timestamp")
    .exec((err, messageData) => {
      res.render("index", {
        displayMessages: messageData,
        user: req.user,
      });
    });
};

// GET login page
exports.login_get = (req, res) => {
  res.render("login");
};

// POST login page
exports.login_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
});

// GET logout
exports.logout_get = (req, res) => {
  req.logout();
  res.redirect("/");
};
