const User = require("../models/User");
const express = require("express");
const passport = require("passport");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const response = await User.findOne({ name: req.body.name });
  if (response) res.status(409).json({ message: "user already exist" });
  else {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  }
});

userRouter.post("/login", passport.authenticate("local", {}), (req, res) => {
  const id = req.user._id.toString();
  const name = req.user.name;
  res.json({ id: id, name: name });
});


userRouter.post("/logout", (req, res) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    return res.sendStatus(200);
  });
});

module.exports = userRouter;
