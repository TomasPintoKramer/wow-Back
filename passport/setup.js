const bcrypt = require("bcrypt");
const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    async (name, password, done) => {
      try {
        const user = await User.find({ name: name });
        if (!user.length) {
          return done(null, false, { message: "user is not registered" });
        } else {
          const hash = await user[0].password;
          const isMatch = await bcrypt.compare(password, hash);
          isMatch
            ? done(null, user[0])
            : done(null, false, { message: "Incorrect username or password." });
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  console.log("SERIALIZE");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("DESERIALIZE");
  const user = await User.findById(id);
  if (!user) {
    done(error, false);
  }
  done(null, user);
});
module.exports = passport;
