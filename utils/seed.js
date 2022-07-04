const mongo = require("../config/db");
const News = require("../models/News");

//Para seedear modificar db.js con esta funcion
// module.exports = async () => {
//   await mongoose.connect(connectionString);
//   console.log("Data Base connected");
//   return mongoose;
// };

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      await News.insertMany([
        {
          title:
            "Karina Gao se convirtió en símbolo de esperanza al recuperarse del COVID y hoy prepara un nuevo proyecto de cocina china",
          subtitle:
            "Con la alegría y la resiliencia como banderas, la cocinera, emprendedora e influencer vivió un año intenso como pocos: fue mamá por tercera vez, le ganó la batalla al covid  y aprendió a resignificar la vida. ",
          field_credits: "Agustina Vissani",
          field_category: "ACTUALIDAD",
          emotion: "Alegria",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/RCH5WTLFLBBM5KWMARK7ZKKD6M.jpg",
        },
        {
          title: "Basta de modelos serias: la alegría es la nueva belleza",
          subtitle: "Null",
          field_credits: "Carmen Güiraldes",
          field_category: "Belleza",
          emotion: "Alegria",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/ZNKOBAJ6MVD5BGLI4KGG5AG7S4.jpg",
        },
        {
          title: "El camino de la alegría: consejos para ser más felices",
          subtitle:
            "Ideas, prácticas y consejos para tener una vida más plena y en conexión con nuestras emociones más nobles",
          field_credits: "Cecilia Alemano",
          field_category: "Espiritualidad",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Plan de Recuperación de la Alegría",
          subtitle: null,
          field_credits: "-",
          field_category: "Histórico",
          emotion: "Alegria",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/OBCVXR2LDBEQRNHR7HNCOA3G7A.jpg",
        },
        {
          title: "Luces y sombras de Dickens",
          subtitle:
            "La casa del autor de  David Copperfield  , hoy museo, encierra tanto sus momentos de alegría como circunstancias de profunda tristeza",
          field_category: "Magia",
          field_credits: "Guillermo Franchella",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Un paseo de lo más pancho",
          subtitle:
            "Además de un centro cultural de alto nivel, Munich es sinónimo de la alegría de vivir; hay que sumarse, eso sí, con buen humor, cerveza y salchichas",
          field_category: "Moda",
          field_credits: "Josefina Dotto",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Con cachaça y alegría",
          subtitle:
            "El Mercado de Floripa esconde el Box 32 para saborear tragos y cigarros",
          field_category: "Brasil",
          field_credits: "Moe Zislak",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Instantáneas de Picasso",
          subtitle:
            "Varios retratos del pintor, tomados por un amigo, se exponen en Weast Palm Beach; en Alemania, una muestra celebra la alegría de vivir",
          field_category: "Histórico",
          field_credits: "Homero Simpson",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Arrail do Cabo, fiel a su estilo brasileño",
          subtitle:
            "Este lugar exhibe sus calles de cuento, además de una vida sosegada y alegría contagiosa, todo para disfrutar a pleno",
          field_category: "Histórico",
          field_credits: "Eber Luduenia",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Una vez más, Papá Noel borra las fronteras",
          subtitle:
            "Father Christmas, Babbo Natale o Pére No‘l, según el país cambia el nombre, pero el espíritu de alegría es siempre el mismo",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Alegria",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title:
            'Hasta las blogueras con "vidas perfectas" tienen momentos de tristeza',
          subtitle:
            "Aimee Song, una del influencers más famosas del mundo, publicó un video contando el lado B de su vida.",
          field_credits: "Soledad Maradona",
          field_category: "Últimas Noticias",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Cómo combatir la flacidez facial y bolsas en los ojos",
          subtitle:
            "Evitar el efecto “tristeza” del rostro es más fácil de lo pensado: alimentación, dermocosmética y protección ante factores externos son los grandes aliados",
          field_credits: "Patricia Gallardo",
          field_category: "Belleza",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "El Nahuel Huapi sigue mordiendo el anzuelo",
          subtitle:
            'A la pesca por el Brazo de la Tristeza, al sudoeste del lago"',
          field_credits: "Carlos Milonga",
          field_category: "Histórico",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Tristeza no tiene fin",
          subtitle: null,
          field_category: "Históricría",
          field_credits: "-",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "El Nahuel Huapi sigue mordiendo el anzuelo",
          subtitle:
            "A la pesca por el Brazo de la Tristeza, al sudoeste del lago",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Luces y sombras de Dickens",
          subtitle:
            "La casa del autor de  David Copperfield  , hoy museo, encierra tanto sus momentos de alegría como circunstancias de profunda tristeza",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Luces y sombras de Dickens",
          subtitle:
            "La casa del autor de  David Copperfield  , hoy museo, encierra tanto sus momentos de alegría como circunstancias de profunda tristeza",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Ocio y negocios",
          subtitle:
            "Rusia gana terreno. Turismo en Palermo. Todos al congreso. Chau tristeza. Un teléfono clave. Canadian pasa revista. Confort en el aire. Avis lo ayuda. ¡Pronto, Roma!",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title:
            "El misterio de Marilyn Monroe, las cintas inéditas, el nuevo documental de Netflix",
          subtitle:
            "En la película que se estrena el próximo 27 de abril se verán grabaciones que intentan reconstruir los últimos días de la renombrada actriz, que murió a los 36 años",
          field_credits: "Mariana Copland",
          field_category: "ACTUALIDAD",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/7UNNKOZCBRALPNZQVFJCAU5ZOI.jpg?itok=f3d-nSNA",
        },
        {
          title:
            'Boy Olmi: "La estabilidad de la pareja es un misterio y pende de un hilo"',
          subtitle: "null",
          field_credits: "María Eugenia Castagnino",
          field_category: "Historias",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/HLFXAK7AGVAWRG62IUHHDJVYSU.jpg?itok=72sviiKd",
        },
        {
          title:
            "Los hijos son un misterio: algunas pistas para entenderlos mejor",
          subtitle: "null",
          field_credits: "Lucila Cornejo",
          field_category: "Maternidad y crianza",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/UIXKXCXAGFD5VJFAPU4LG7J7YM.jpg?itok=pxm_wXyR",
        },
        {
          title: "El misterio de los sobris",
          subtitle: null,
          field_category: "Familia",
          field_credits: "Soledad Simond",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/X35LQMI465FZZMVAUQKKKT66EE.jpg?itok=zLYRB6Nx",
        },
        {
          title: "Noches de crimen y misterio",
          subtitle:
            "Recorridos nocturnos por la ciudad de Buenos Aires para descubrir un poco más de los casos policiales más renombrados de la historia, con visitas al lugar del asesinato y a cementerios",
          field_category: "Crimen",
          field_credits: "Alejandro Rapetti",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Dioses, demonios y misterio en los templos de Angkor Wat de Camboya",
          subtitle:
            "Un recorrido místico por estas milenarias ruinas asiáticas",
          field_category: "Viajes",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: 'Por qué el amor nunca "cierra"',
          subtitle: "Un diálogo filosófico para dilucidar el misterio del amor",
          field_category: "Filosofía",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Los mejores secretos de agosto de nuestras lectoras",
          subtitle:
            "Estas son las cosas que no le contás a nadie; ¿cuál es tu misterio mejor guardado?",
          field_category: "Mente",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "De Perú a Zimbabue, cinco destinos que son un misterio",
          subtitle: null,
          field_category: "Viajes",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Cuando el destino es un misterio",
          subtitle:
            "Las rocas de Stonehenge, las líneas de Nazca, los moáis de Pascua y otras maravillas del pasado con más enigmas que certezas |  Páginas 6 y 7",
          field_category: "",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "“No puedo pararme frente a un espejo”. La demoledora reflexión de Emma Thompson sobre el desafío de mirarse a sí misma",
          subtitle:
            "La actriz británica dejó a todos sin palabras en la rueda de prensa de Leo Grande durante el Berlinale",
          field_credits: "Adrian Suarez",
          field_category: "ACTUALIDAD",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/NEULZZ5VRVB5PIXPOM7H42RYZA.jpg?itok=eoLLd6Ec",
        },
        {
          title: "7 programas para salir de la rutina",
          subtitle:
            "Arte, gastronomía, teatro para los chicos, un espacio de reflexión, mantras y cantos sagrados y una expo sobre el universo de las bicicletas son algunas de las propuestas que tenemos en la agenda.",
          field_credits: "Pikin Bailando",
          field_category: "Recorridos",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Arte en la playa para chicos, concursos creativos, música, ferias y más propuestas",
          subtitle:
            "Este fin de semana la agenda se nutre con actividades para todos: hay talleres para chicos en la costa, una feria de retazos y textiles, un evento para bailar en la calle, concursos para los vinculados a las artes dramáticas, un ciclo de reflexión y un festival musical.",
          field_credits: "Raimundo Rueda",
          field_category: "Últimas Noticias",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Arte en la playa para chicos, concursos creativos, música, ferias y más propuestas",
          subtitle:
            "Este fin de semana la agenda se nutre con actividades para todos: hay talleres para chicos en la costa, una feria de retazos y textiles, un evento para bailar en la calle, concursos para los vinculados a las artes dramáticas, un ciclo de reflexión y un festival musical.",
          field_category: "Viajes",
          field_credits: "Homero Simpson",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Sumergida en un mar de libros. Una reflexión ferial",
          subtitle: null,
          field_category: "Literatura",
          field_credits: "Carina Durn",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "¿Seguís sin pareja? No sos la única",
          subtitle:
            "Quizá hayas visto el corto autobiográfico 35 and Single, que disparó esta inquietud en las redes sociales y nos despertó esta reflexión interna que queremos compartir con vos.",
          field_category: "Amor",
          field_credits: "Marge Simpson",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "La movida del otoño, en las paredes",
          subtitle:
            "Aportan color, un nuevo pensamiento, una sonrisa o una reflexión en las paredes de la ciudad. Observamos sus obras mientras caminamos pero, ¿quiénes son sus creadores? ¡Descubrilos!",
          field_category: "Mente",
          field_credits: "Susana Pampin",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: '"Contar con alguien en quien descansar"',
          subtitle:
            'Felicitas Rossi, directora de OHLALÁ!, comparte con nosotras una reflexión sobre el amor; "Los términos «bueno» y «boludo» parecieron juntarse para confundirnos en nuestras elecciones; buscamos hombres cancheros, superados... pura cáscara con el paso del tiempo"',
          field_category: "Mujer",
          field_credits: "Soledad Villamil",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Reflexión adulta",
          subtitle: null,
          field_category: "Mente",
          field_credits: "Moe Zislak",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "¿Qué espera un hijo de una madre?",
          subtitle:
            "Cuando falta muy poco para festejar su día, una reflexión sobre la maternidad en la actualidad; ¿qué opinás sobre el tema?",
          field_category: "Maternidad",
          field_credits: "Marge Simpson",
          emotion: "Reflexion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Después de que los estafaran, armaron su bondi-casa y hoy viven frente al mar",
          subtitle:
            "Recorrieron el país para salir a surfear y se enamoraron de la naturaleza de Chapadmalal. Luego de perder todo el dinero que habían ahorrado, emprendieron el proyecto que cambiaría sus vidas para siempre.",
          field_credits: "Carmen Güiraldes",
          field_category: "Historias",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2022-06/7ZS5ADTIAZAPTDVHFVZJ6B2CJY.jpg?itok=wchCf89j",
        },
        {
          title:
            "Recorrido para comer en medio de la ciudad, pero rodeada de verde",
          subtitle:
            "Te proponemos lugares que tienen jardines ocultos, huertas a metros de las mesas, entre otras opciones para que reconectes con la naturaleza ",
          field_credits: "Gisela Carpineta",
          field_category: "Histórico",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/CKBL6ZJ6HZEKTGUB3AXG5PLCNE.jpg?itok=Z-YA51LV",
        },
        {
          title:
            "Ideas deco: una diseñadora nos cuenta cómo remodeló su casa de Manzanares",
          subtitle:
            "Marisa Flores armó su propio refugio de campo lleno de color, naturaleza y detalles heredados; ¿Cómo es soñar la casa para que haya encuentro y calma?",
          field_credits: "Soledad Avaca Cuenca",
          field_category: "ACTUALIDAD",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/SP4TAVAMIZBK5NO2W6RNTOOJYI.jpg?itok=4rKSCVw4",
        },
        {
          title:
            "Semana Santa en Mar del Plata: qué hacer para conectar con la tierra, el mar y el arte",
          subtitle:
            "Una selección de propuestas para conocer la ciudad costera en total contacto con la naturaleza",
          field_category: "Gastronomia",
          field_credits: "Laura Gambale",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/QRNHTL7FGBAZTCA54GR6DRLKBM.jpg?itok=fl0L3MJz",
        },
        {
          title:
            "6 maravillas patagónicas ocultas que tenés que visitar y que no vas a creer que están en Argentina",
          subtitle:
            "Viajamos a lugares ocultos de nuestro sur para sorprendernos con la naturaleza. ¿Venís?",
          field_category: "Viajes",
          field_credits: "Marge Simpson",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/KIZQUBZCPBD7HD6EB6IKVPIXTY.jpg?itok=jI6dd5oS",
        },
        {
          title: "La luna de gusano: por qué se llama así",
          subtitle:
            "En el hemisferio norte la relacionan con el inicio de la primavera, la vinculan con el renacer de la naturaleza; acá, de este lado del mundo, también aprovechamos para descubrir sus misterios ",
          field_category: "Viajes",
          field_credits: "Ezequiel Brahim",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/LLMGQ5KD5FHJRIJZDKJ6APLWSY.jpg?itok=xPAoF7xP",
        },
        {
          title:
            "Antes del estreno de Outlander, charlamos con Caitriona Balfe: “No está en la naturaleza de Claire ser la persona vulnerable”",
          subtitle:
            "La nueva entrega llega a Star+ el próximo miércoles 9 de marzo",
          field_category: "Cultura",
          field_credits: "Soledad Venesio",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/O2FKEKDWQRCGBC7LJSLRWYSYNE.jpg?itok=1bJao9kH",
        },
        {
          title:
            "¿Cómo es el Walüng Patagonia, uno de los festivales de música electrónica más exclusivos de Argentina?",
          subtitle:
            "En medio de la naturaleza, en San Martín de Los Andes se celebró la segunda edición de esta fiesta que presentó un lineup de lujo",
          field_category: "Viajes",
          field_credits: "María Paz Moltedo",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/MFADZWYM5JD2NOY2FVINCPFQOY.jpeg?itok=vD_8aTYR",
        },
        {
          title:
            "Vive en Ituzaingó y construyó una casa circular. “Da la sensación de estar inserto en un bosque”",
          subtitle:
            "De estilo modernista, en su diseño mandan el verde, el juego y la niñez",
          field_category: "Moda",
          field_credits: "Ana Paula Queija",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/NDUBGW6MF5BU3PQYSFFWTBWJMY.jpg?itok=mubUxuW1",
        },
        {
          title:
            "Estirá los findes: 4 lugares para armarte unas minivacaciones",
          subtitle:
            "Esta es nuestra selección de sitios a los que podés irte en una escapada de pocos días, pero que te garantizan naturaleza, aire libre y distención",
          field_category: "Viajes",
          field_credits: "Romina Salusso",
          emotion: "Naturaleza",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/WTZPBCWX4RFCTNIQKOOBTO6EMM.jpg?itok=9eE2N4H9",
        },
        {
          title:
            "Pilar: recorré sus calles en clave gourmet, de compras, diversión o relax",
          subtitle: "null",
          field_credits: "Gisela Carpineta",
          field_category: "Histórico",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/KDRLXVMACFDW5MKAN5RJNOUSLQ.jpg?itok=o1p-PjJC",
        },
        {
          title: "6 hoteles pensados para niños",
          subtitle:
            "Con habitaciones y servicios especialmente ideados para ellos, podés vivir una experiencia completamente diferente y asegurar diversión y relax para todos.",
          field_credits: "Jimena Barrionuevo",
          field_category: "Histórico",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Entre bratwurst y Playmobil: conocer Núremberg con los chicos",
          subtitle:
            "ALEMANIA. El Museo del Juguete, el Castillo de Faber Castell y el parque de Playmobil, tres espacios que convocan a la sorpresa, la diversión y la nostalgia",
          field_credits: "María Fernanda Lago",
          field_category: "Histórico",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2TP3GR2CJFEELP4TXFVM4OETOA.jpg?itok=ya7llY4G",
        },
        {
          title: "6 parques acuáticos brasileños de Camboriú a Fortaleza",
          subtitle:
            "Por su condición de país con 8000 km de litoral y clima tropical, Brasil se presta para la diversión acuática.",
          field_category: "Viajes",
          field_credits: "Homero Simpson",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/FTS2JZVVFRAAJMFZ4OUMZB5LJE.jpg?itok=inqEos11",
        },
        {
          title: "Moda: noche de amigas",
          subtitle: "Equipos para una salida a pura diversión",
          field_category: "Moda",
          field_credits: "Susana Villamil",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Sexo: técnicas para darte tu propio placer",
          subtitle:
            "La soltería es una etapa genial para el autodescubrimiento y la diversión. Hacete cargo de tu libido y no la dejes en stand by.",
          field_category: "Amor",
          field_credits: "Romina Zanellato",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/Y6SGQY76FNDDBIVPBFBA4F5QVE.jpg?itok=Ga8U8NwN",
        },
        {
          title: "5 nuevas formas de hacer ejercicio",
          subtitle:
            "Las nuevas tendencias fitness prometen llegar a un cuerpo saludable en menos tiempo y con más diversión. A continuación, te contamos qué podés hacer para estar en forma.",
          field_category: "Salud",
          field_credits: "Susana Pampin",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Premios, diversión y mucha actitud en el cierre de BAFWEEK",
          subtitle:
            "Ya te mostramos algunos looks de la Always Platinum Party que cerró la semana de la moda a puro glamour. Ahora te contamos un poco más de lo que pasó en la fiesta, para que no te pierdas ningún detalle.",
          field_category: "Moda",
          field_credits: "Susana Villamil",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Emociones fuertes en el lado b de la montaña",
          subtitle:
            "Bariloche. En Catedral y en el cerro Otto, snow bikes, donas y trineos retro para ampliar el menú de actividades y posibilidades de diversión en la nieve",
          field_category: "Viajes",
          field_credits: "Soledad Maradona",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Sin nieve, con diversión",
          subtitle:
            "En las pistas del centro de esquí, un tobogán gigante y otras propuestas de aventura",
          field_category: "Viajes",
          field_credits: "Susana Pele",
          emotion: "Diversion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Una meditación para cortar con la rutina.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          field_credits: "Paz Azcárate",
          field_category: "Últimas Noticias",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2022-06/podcast433x65011610070160.png?itok=2ANc9z0C",
        },
        {
          title:
            "Michelle Obama. 5 claves para encontrar tu voz y contar tu propia historia",
          subtitle: "null",
          field_credits: "Paz Azcárate",
          field_category: "ACTUALIDAD",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2022-06/image%20142.png?itok=rheu8TY8",
        },
        {
          title:
            "De la idea a la acción. 10 claves para hacer realidad tu proyecto emprendedor",
          subtitle: "null",
          field_credits: "Paz Azcárate",
          field_category: "ACTUALIDAD",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2022-06/Enmascarar%20grupo%20110.png?itok=Ea0qhiuH",
        },
        {
          title:
            "Encontrar tu paz: herramientas para adquirir seguridad en el cuerpo, la mente y las emociones",
          subtitle:
            "En tiempos de incertidumbre, los espacios de calma interior se vuelven una elección consciente; preguntas y ejercicios que pueden servirte de guía en este proceso",
          field_category: "Mente",
          field_credits: "Susana Pampin",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/SBYLK2AIDBFWRFX7OKRK7UUH34.jpg?itok=IXJdL5gq",
        },
        {
          title: "Semana Santa: 5 lugares de Córdoba que vas a querer visitar",
          subtitle:
            "Desde la ciudad capital, con mucho patrimonio jesuítico, hasta parapente en las sierras, pasando por propuestas gastronómicas de calidad; opciones para todos los gustos",
          field_category: "Viajes",
          field_credits: "Gabriela Origlia ",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/J2JQLSOBDRC67G3ILFU6TLOKQA.jpg?itok=zoYJgBLs",
        },
        {
          title:
            "La fuerza del linaje: integrar la historia familiar es una forma poderosa de darnos permiso para vivir con paz y autonomía nuestra propia vida",
          subtitle:
            "La terapia sistémica, y las constelaciones en particular, muestran cada vez más cómo todo lo que ocurrió en nuestra familia se convierte en recursos de nuestro sistema familiar; a veces estos recursos nos ayudan",
          field_category: "Mente",
          field_credits: "Cecilia Alemano",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/CJWVQEYYRZG3RN7OALJGWGH6TM.jpg?itok=LJ3zZ-UO",
        },
        {
          title:
            "De Córdoba y con toda la onda: el estilo de la música y cantautora Zoe Gotusso",
          subtitle:
            "Estuvimos charlando con esta promesa de la música local, que además de haberse lanzado como solita tiene un pasión que nos interpela: la moda. No te pierdas sus looks.  ",
          field_category: "Musica",
          field_credits: "Paz Azcárate",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/X4AY5ALTBRGKHM6PZBB6TEV4ZQ.jpg?itok=O7_giIc7",
        },
        {
          title:
            "Ahora podés dormir en la suite donde John Lennon y Yoko Ono hicieron su bed-in por la paz",
          subtitle:
            "Ambientada como en los 60 y con una experiencia de realidad virtual para sumergirte en aquel momento.",
          field_category: "Viajes",
          field_credits: "Susana Pampin",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "¿Cuánto costará veranear en las sierras de Córdoba?",
          subtitle:
            "Con aumentos de entre el 15 y el 20%, hay propuestas hoteleras, de cabañas y de alquiler para todos los presupuestos según la región de la provincia",
          field_category: "Viajes",
          field_credits: "Gabriela Origlia ",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Kim Kardashian y Katy Perry, algunas de las famosas que se entregan a los cristales de cuarzo para salvar a Hollywood",
          subtitle:
            "En busca de la paz espiritual, cada vez son más los artistas que se entregan a las energías de las piedras para alejarse de las malas ondas. En esta nota, te contámos quiénes son.",
          field_category: "Espectaculo",
          field_credits: "Susana Villamil",
          emotion: "Paz",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title:
            "Horóscopo de mayo. ¿Qué traen los astros para este nuevo mes?",
          subtitle:
            "Amor y sexo, dónde tomar acción, tus desafíos y oportunidades. Anticipate a lo que viene con este horóscopo signo por signo. ",
          field_credits: "Ana Bilsky",
          field_category: "Astrología",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2022-06/LZW45FWX2ZHOZNJH56PONFIYBY.jpg?itok=R-D04dSh",
        },
        {
          title:
            "Conoció a su marido en Tinder y hoy es la primera CEO de la aplicación de citas más popular del mundo: ¿quién es Renate Nyborg?",
          subtitle: "Una historia de amor y liderazgo",
          field_credits: "Nathalie Jarast",
          field_category: "Historias",
          emotion: "Amor",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title:
            "Luciano Lutereau y Verónica Buchanan hablan de parejas abiertas, citas virtuales y el nuevo amor tecnológico",
          subtitle:
            "En su último libro, Adiós al matrimonio, el psicoanalista analiza la nueva configuración de las parejas; junto a su compañera y colega esperan un hijo; en esta entrevista hablan sobre los desafíos de compartir una vida de a dos",
          field_credits: "Ana Paula Queija",
          field_category: "ACTUALIDAD",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/CD4J3BNBU5C6BOVIKC5YTENMFA.jpg?itok=F85jrDHv",
        },
        {
          title:
            "La China Suárez y Santiago Celli estrenaron “El Juego del Amor”: mirá el video de la canción",
          subtitle:
            "La unión de ambos artistas nació a principios de este año, cuando se conoció que la actriz se lanzaría como cantante solista; la canción que presentaron está producida por Ale Sergi y Cachorro López",
          field_category: "Musica",
          field_credits: "Ale Sergi",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/VZ6O72WNPZDWNOKUCMWVG5C4MQ.JPG?itok=k-j4tx5M",
        },
        {
          title:
            "Ella tiene 95 años y él casi cien: los secretos de una historia de amor que lleva siete décadas",
          subtitle:
            "Pasaron 68 años desde que se casaron; Piru y Victor dicen que están tan enamorados como el primer día; la pareja nos cuenta cuáles son los secretos de un matrimonio largo y feliz",
          field_category: "Amor",
          field_credits: "Karina Korn",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/BHCAE2RUBVBOTJYLWUFGF73JD4.jpg?itok=3dEBlPmc",
        },
        {
          title:
            "“No quiero tu Instagram, quiero tomar vino con vos”: ¿quién es el artista argentino que deja mensajes de amor en las calles de Buenos Aires?",
          subtitle:
            "Su poesía visual nos inspira y nos invita a una conexión más real.",
          field_category: "Cultura",
          field_credits: "Ayelén Di Leva",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/PANWX6ZZWZDWTEO22SSKB5GZKU.jpg?itok=K8uOGSC6",
        },
        {
          title:
            "Quién es Eugenia Quibel, el último gran amor de Gerardo Rozín",
          subtitle:
            "El conductor y productor rosarino murió a los 51 años; su compañera es locutora y trabajó con él en varios proyectos, el último, Morfi",
          field_category: "Amor",
          field_credits: "Homero Simpson",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/7BTCEVMZHZEYZLDKK2PURZLLNE.jpeg?itok=YtAZNiGx",
        },
        {
          title:
            "¿Qué tenés que saber de Pura Sangre, la nueva obra de Griselda Siciliani en Multitabaris COMAFI?",
          subtitle:
            "Con una puesta en escena minimalista y una mirada crítica sobre el amor, nos preguntamos si logra lo que promete desde su premisa",
          field_category: "Cultura",
          field_credits: "Soledad Venesio",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/CBB7OMBPXFFOFM56AEOTYG5B4M.jpg?itok=c0dVPfO4",
        },
        {
          title:
            "6 libros de literatura erótica que son ideales para encender tus fantasías",
          subtitle:
            "Desde historias de amor subidas de tono hasta narrativas más explícitas",
          field_category: "Literatura",
          field_credits: "Soledad Venesio",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/JJOK55IHEZDH5IVGY7RBONKADQ.jpg?itok=WR-QgCX5",
        },
        {
          title:
            "Después de adoptarla, el veterinario les confirmó que estaba enferma y durante dos semanas luchó por su vida. “Nori nos dio una noción de familia”",
          subtitle:
            "El amor es la forma más genuina de comunicarnos con nuestras mascotas y es sumamente eficaz para lograr una convivencia armónica y responsable",
          field_category: "Animales",
          field_credits: "Margo Robi",
          emotion: "Amor",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/I3L6SA4SSJB5JHLS47BF2ZKUSM.jpg?itok=D-sv_Cir",
        },
        {
          title: "San Valentín: 7 escapadas para celebrar el amor",
          subtitle: "Reavivá la pasión con estas escapadas de a dos.",
          field_credits: "Ludmila Moscato",
          field_category: "Últimas Noticias",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "En 7 meses creó su marca de joyas: cómo lo hizo",
          subtitle:
            "La florista Bárbara Pepe consolidó Paisajita, la marca de joyería botánica que une su pasión por la naturaleza y lo artesanal.",
          field_credits: "Laura Cedeira",
          field_category: "Histórico",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: 'Inés Estévez. "El turista típico altera el paisaje"',
          subtitle:
            "Tours con obras de teatro y con shows musicales, vacaciones de Brasil a Bután... La actriz no sobreactúa su pasión por los viajes",
          field_credits: "Benjamin Vicuña",
          field_category: "Histórico",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/KQG4A6QX2ZEBBPHRXCDK5ILZGU.jpg?itok=TIe1m3kg",
        },
        {
          title:
            "De Córdoba y con toda la onda: el estilo de la música y cantautora Zoe Gotusso",
          subtitle:
            "Estuvimos charlando con esta promesa de la música local, que además de haberse lanzado como solita tiene un pasión que nos interpela: la moda. No te pierdas sus looks.  ",
          field_category: "Musica",
          field_credits: "Paz Azcárate",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/X4AY5ALTBRGKHM6PZBB6TEV4ZQ.jpg?itok=O7_giIc7",
        },
        {
          title:
            "Luna llena en Aries: ¿Qué significa y por qué tenemos nuestros deseos a flor de piel?",
          subtitle:
            "Con una luz en particular iluminando un sector de la carta natal, te contamos cuál es el impacto del fenómeno y qué decisiones deberías tomar esta semana",
          field_category: "Horoscopo",
          field_credits: "Luisa Herlax",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/OKWIRBB5R5FWZL3MWT4H7OJEPM.jpg?itok=vGyKBMop",
        },
        {
          title:
            "5 Yardas: una exLeona y una publicista la rompen organizando los mejores eventos",
          subtitle:
            "Se conocieron jugando al hockey y su pasión por el deporte las llevó a crear una agencia que factura 12 millones de pesos por mes",
          field_category: "Amor",
          field_credits: "Stefania Dommarco",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/6C73EXJVIVGBFFGMO4SNZSGM4M.JPG?itok=vqrcWpTy",
        },
        {
          title:
            "Las Rojas: lo que tenés que saber sobre la nueva película de Mercedes Morán y Natalia Oreiro",
          subtitle:
            "Las actrices comparten cartel por primera vez en un western femenino que exalta la pasión por encima del materialismo",
          field_category: "Espectaculo",
          field_credits: "Jessica Blady",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2XFDVWYXWVBT5GDYJIQLIV6LFI.jpg?itok=7NR_YQCa",
        },
        {
          title:
            "Economía de la pasión: las redes sociales, aliadas para capitalizar (y monetizar) la creatividad",
          subtitle: null,
          field_category: "Cultura",
          field_credits: "Violeta Galanternik",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/PDEQWEZJT5GGTLZGYHKEISZETY.jpg?itok=L_izPJXb",
        },
        {
          title:
            "Madre e hijas unidas emprenden juntas por una pasión: hacer carteras lindas y accesibles",
          subtitle: null,
          field_category: "Maternidad",
          field_credits: "Daniela Chueke Perles",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/P3TILAAODNHHNG2DOF7U7CTPSI.jpg?itok=8yE-D2R3",
        },
        {
          title: "Laura Laprida enciende nuestra moda roja",
          subtitle:
            "Faldas, pantalones, vestidos, tops y camperas. Todo se lleva en el color de la pasión. Mirá los conjuntos que armamos.",
          field_category: "Moda",
          field_credits: "Laura Laprida",
          emotion: "Pasion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com//sites/default/files/2022-06/placeholder_0.svg",
        },
        {
          title: "Tierra del Fuego: la aventura no tiene fin",
          subtitle:
            "Hasta el fin del mundo en una 4x4 con agua hasta las ventanillas, remando en botes de goma por el río Lapataia, o a pie entre lengas y coihues, otras maneras de... descansar",
          field_credits: "Ester Teican",
          field_category: "Histórico",
          emotion: "Accion",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Muñecas bravas",
          subtitle:
            "Fútbol, hockey, rugby, skate... ellas también buscan acción. Se animan a todo y participan de los torneos reducidos que organizan diversos paradores",
          field_credits: "Roberto Galgo",
          field_category: "Histórico",
          emotion: "Accion",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title: "Muñecas bravas",
          subtitle:
            "En un entorno que invita a la acción, se realizarála fiesta provincial de esta fruta",
          field_credits: "Jorge Perse",
          field_category: "Histórico",
          emotion: "Accion",
          field_img_primary: "/images/placeholder.svg",
        },
        {
          title:
            "May Calamawy: la actriz egipcia-palestina que conquista Marvel y coprotagoniza la nueva serie Moon Knight",
          subtitle:
            "Disponible en Disney+ a partir de hoy, miércoles 30, la ficción nos trae mística egipcia y grandes escenas de acción",
          field_category: "Espectaculo",
          field_credits: "Soledad Venesio",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/SPWNZGWMCRF6TDTDLQJRWS2PBQ.JPG?itok=oYEgxpnB",
        },
        {
          title:
            "Mirá el primer avance de Bullet Train, el divertido thriller de acción protagonizado por Brad Pitt",
          subtitle:
            "Del director de John Wick y Deadpool 2, llega a los cines durante julio de este año",
          field_category: "Espectaculo",
          field_credits: "Soledad Venesio",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/N7VC7Y7AARFNLBXLLJNWR2VOEI.jpg?itok=EBif-Yjp",
        },
        {
          title:
            "Día Mundial de la Educación Ambiental: 8 hábitos sustentables para poner en práctica este año",
          subtitle:
            "Algunas ideas fáciles y prácticas para que pongas en acción en tu rutina diaria",
          field_category: "Naturaleza",
          field_credits: "Inés Pujana",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/WDC62UBS4ZFRPIITEXJAEJ7SQA.jpg?itok=yWqCRoaG",
        },
        {
          title: "¿Qué series de televisión estrenan en noviembre?",
          subtitle:
            "Dramas, comedias y series de acción. Te contamos qué ficciones no deberías perder de vista.",
          field_category: "Espectaculo",
          field_credits: "Soledad Venesio",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/QKWMHXI77JABPPZGCZ4ES5PDDU.jpg?itok=hvYMfgKJ",
        },
        {
          title:
            "Horóscopo de mayo. ¿Qué traen los astros para este nuevo mes?",
          subtitle:
            "Amor y sexo, dónde tomar acción, tus desafíos y oportunidades. Anticipate a lo que viene con este horóscopo signo por signo. ",
          field_category: "Horoscopo",
          field_credits: "Ana Bilsky",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/LZW45FWX2ZHOZNJH56PONFIYBY.jpg?itok=a02M3NfI",
        },
        {
          title:
            "Agenda verde: 10 temas urgentes que necesitan de la acción colectiva e individual",
          subtitle: null,
          field_category: "Naturaleza",
          field_credits: "Joy Schvindlerman",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/VINLXDASYZBNPBV6HDBPO7KTJA.jpg?itok=7s4QbPP0",
        },
        {
          title:
            "Plan de acción. 3 cosas que tenés que hacer para cuando pase el Coronavirus",
          subtitle: null,
          field_category: "Salud",
          field_credits: "Monica Argento",
          emotion: "Accion",
          field_img_primary:
            "https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/HJMBOGRCUJDMBCX4WNW27EYTI4.jpg?itok=NX-429eg",
        },
      ]);
    } finally {
      mongoose.connection.close();
    }
  });
};

//  connectToMongoDB();
