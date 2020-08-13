const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user");

// GET registration page
exports.newUser_get = (req, res) => {
  res.render("register");
};

// POST registration page
// eslint-disable-next-line consistent-return
exports.newUser_post = (req, res, next) => {
  if (req.body.userPass !== req.body.userPass2) {
    const err = "Password must match"; // <-- Improve this rejection
    return next(err);
    // eslint-disable-next-line no-else-return
  } else {
    bcrypt.genSalt(10, (saltErr, salt) => {
      bcrypt.hash(req.body.userPass, salt, (hashErr, hashedPassword) => {
        // eslint-disable-next-line no-unused-vars
        const user = new User({
          firstname: req.body.userFirstName,
          lastname: req.body.userLastName,
          username: req.body.userEmail,
          password: hashedPassword,
          accesslevel: req.body.userAccess,
          // eslint-disable-next-line consistent-return
        }).save((saveErr) => {
          if (saveErr) throw saveErr;
          res.redirect("/login");
        });
      });
    });
  }
};
