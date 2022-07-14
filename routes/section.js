const Section = require("../models/Sections");
const express = require("express");
const sectionRouter = express.Router();

sectionRouter.get("/", (req, res, next) => {
  Section.find({})
    .then((result) => res.send(result))
    .catch(next);
});

sectionRouter.post("/", (req, res, next) => {
  const newContent = req.body;
  Section.create({ ...newContent })
    .then((newSection) => res.send(newSection))
    .catch(next);
});

sectionRouter.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Section.deleteOne({ _id: id })
    .then((newSection) => res.send(newSection))
    .catch(next);
});

sectionRouter.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const newContent = req.body;
  Section.findOneAndUpdate({ _id: id }, { ...newContent })
    .then(() => {
      Section.findById(id)
        .then((data) => {
          res.send(data);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = sectionRouter;
