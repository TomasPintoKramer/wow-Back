const News = require("../models/News");
const express = require("express");
const Router = express.Router();
const routerNews=require('./news')

Router.use('/news', routerNews)


module.exports = Router;
