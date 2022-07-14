const mongo = require("../config/db");
const Sections = require("../models/Sections");



const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
      try {
        await Sections.insertMany(
            [
                {
                title: "Noticias que te llenan de Alegria",
                schema: "<SchemaC/>",
                color: "eb5231",
                icono: ""
                },
                {
                title: "Tristeza",
                schema: "<SchemaB/>",
                color: "ec4f6c"
                },
                {
                title: "Misterio",
                schema: "<SchemaC/>",
                color: "6f66db"
                },
                {
                title: "Reflexion",
                schema: "<SchemaD/>",
                color: "8759c5"
                },
                {
                title: "Naturaleza",
                schema: "<SchemaA/>",
                color: "eda333"
                },
                {
                title: "Diversion",
                schema: "<SchemaB/>",
                color: "427ad9"
                },
                {
                title: "Paz",
                schema: "<SchemaC/>",
                color: "e1b239"
                },
                {
                title: "Amor",
                schema: "<SchemaD/>",
                color: "eb5231"
                },
                {
                title: "Pasion",
                schema: "<SchemaA/>",
                color: "ec4f6c"
                },
                {
                title: "Accion",
                schema: "<SchemaB/>",
                color: "ec4f6c"
              }
            ]
        );
      } finally {
        mongoose.connection.close();
      }
    });
  };
  
  //  connectToMongoDB();