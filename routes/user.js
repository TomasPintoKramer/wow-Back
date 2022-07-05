const User = require("../models/User");
const express = require("express");
const passport = require("passport");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response) res.status(400).json({ message: "user already exist" });
  else {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201).send(newUser);
  }
});

userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  const id = req.user._id.toString();
  const email = req.user.email;
  res.json({ id: id, email: email });
});
// router.post("/register", (req, res) => {
//   User.create(req.body).then((user) => {
//     res.status(201).send(user);
//   });
// });

// newsRouter.get("/newses", (req, res, next) => {
//   News.find({})
//     .then((data) => {
//       res.send(data);
//     })
//     .catch(next);
// });

// newsRouter.get("/:id", (req, res, next) => {
//   const { id } = req.params;
//   News.findById(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch(next);
// });

module.exports = userRouter;
