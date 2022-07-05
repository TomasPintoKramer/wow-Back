const bcrypt = require("bcrypt");
const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.find({ email: email });
        const hash = await user[0].password;
        if (!user) {
          return done(null, false);
        } else {
          const isMatch = await bcrypt.compare(password, hash);
          isMatch ? done(null, user[0]) : done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
module.exports = passport;
