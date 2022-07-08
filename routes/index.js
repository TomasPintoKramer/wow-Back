const News = require("../models/News");
const express = require("express");
const Router = express.Router();
const routerNews = require("./news");
const routerUser = require("./user");

Router.use("/news", routerNews);
Router.use("/user", routerUser);

module.exports = Router;
