const User = require("../models/User");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  User.findOne({ email: req.body });
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
