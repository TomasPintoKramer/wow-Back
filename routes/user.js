const User = require("../models/User");
const express = require("express");
const passport = require("passport");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const userName = await User.findOne({ name: req.body.name });
  const userEmail = await User.findOne({ email: req.body.email });
  if (userName) return res.status(409).send("User name already exist");
  if (userEmail) return res.status(409).send("User mail already exist");
  else {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  }
});

userRouter.post("/login", function (req, res, next) {
  try {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/login");
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.status(200).send(user);
      });
    })(req, res, next);
  } catch (error) {
    console.log(error);
  }
});
// userRouter.post(
//   "/login",
//   passport.authenticate("local", {}),
//   (req, res, next) => {
//     const id = req.user._id.toString();
//     const name = req.user.name;
//     const user = req.user;
//     req.logIn(user, function (err) {
//       if (err) {
//         return next(err);
//       }
//       console.log(user);
//       res.status(200).send(user);
//     });
//   }
// );
// //
// //   res.json({ id: id, name: name });
// // });

userRouter.post("/logout", (req, res) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    return res.sendStatus(200);
  });
});

userRouter.get("/me", (req, res) => {
  req.user
    ? res.status(200).send(req.user)
    : res.status(304).json({ err: req.session });
});

module.exports = userRouter;
