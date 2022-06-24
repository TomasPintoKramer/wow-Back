const express = require("express");
const app = express();
const morgan = require("morgan");
// const routes = require("./routes");
// const db = require("./db");
// logging middleware
app.use(morgan('tiny'));


// parsing middleware
app.use(express.json());
//Ruteo
// app.use("/api", routes);
//Ataja errores de 'not found'
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
const port=3001
// Levanta el puerto y tira abajo la base de datos.
// db.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
// });