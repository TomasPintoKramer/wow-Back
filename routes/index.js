const News = require("../models/News");
const express = require("express");
const Router = express.Router();
const routerNews = require("./news");
const routerUser = require("./user");
const routerSection = require("./section");

Router.use("/news", routerNews);
Router.use("/user", routerUser);
Router.use("/section", routerSection);

module.exports = Router;
