const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://userWow:wow2022@wowdb.bjojf.mongodb.net/wowDb?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("Data Base connected"))
  .catch((err) => console.log(err));

//Para seedear modificar db.js con esta funcion
// module.exports = async () => {
//   await mongoose.connect(connectionString);
//   console.log("Data Base connected");
//   return mongoose;
// };
