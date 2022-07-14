const mongo = require("./config/db.js");
const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const passport = require("./passport/setup");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const News = require("./models/News.js");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const uri = process.env.MONGODB_URI;
const whitelist = [
  "http://localhost:8000",
  "https://rito-mono.herokuapp.com",
  "rito-mono.herokuapp.com",
  "https://abm-kappa.vercel.app",
];
// logging middleware
app.use(morgan("dev"));

app.use(
  cors({
    credentials: true,
    origin: whitelist,
  })
);

// parsing middleware
app.use(express.json());

app.use(cookieParser());

//authentication
app.use(
  session({
    secret: "really really good looking",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://userWow:wow2022@wowdb.bjojf.mongodb.net/wowDb?retryWrites=true&w=majority",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
//Ruteo
app.use("/api", routes);

//Ataja errores de 'not found'

app.use("/api", (req, res) => {
  res.sendStatus(404);
});
// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
const port = process.env.PORT || 3001;
// Levanta el puerto y tira abajo la base de datos.

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
