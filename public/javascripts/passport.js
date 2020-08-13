const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

exports.authenticateUser = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) throw err;
    if (!user) {
      return done(null, false, { msg: "Incorrect username" });
    }
    bcrypt.compare(password, user.password, (passErr, passwordMatch) => {
      if (passErr) throw passErr;
      if (passwordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Wrong password" });
      }
    });
  });
});
