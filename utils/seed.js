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
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/TOQ2jnFy0P6PvSlj6-yPWJ3CmyU=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CZK5ZBGY65DAPI5EJFYR3GYJVE.jpg",
        },
        {
          title: "Basta de modelos serias: la alegría es la nueva belleza",
          subtitle: "Null",
          field_credits: "Carmen Güiraldes",
          field_category: "Belleza",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/LwQwKnaEF1VokYy8SQdMxLScns0=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/O6MW7MUUHFBRXGCLWKPH6CK4JM.jpg",
        },
        {
          title: "El camino de la alegría: consejos para ser más felices",
          subtitle:
            "Ideas, prácticas y consejos para tener una vida más plena y en conexión con nuestras emociones más nobles",
          field_credits: "Cecilia Alemano",
          field_category: "Espiritualidad",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://resizer.glanacion.com/resizer/-rP47wpRZaaTVDG3jcSW1xb9gU0=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KOBOZ2UQJVG7PLRIFC74CQ5XPI.jpg",
        },
        {
          title: "Plan de Recuperación de la Alegría",
          subtitle: null,
          field_credits: "-",
          field_category: "Histórico",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/R_SvVrSPx1gyPYoVu000HS80InE=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OBCVXR2LDBEQRNHR7HNCOA3G7A.jpg",
        },
        {
          title: "Luces y sombras de Dickens",
          subtitle:
            "La casa del autor de  David Copperfield  , hoy museo, encierra tanto sus momentos de alegría como circunstancias de profunda tristeza",
          field_category: "Magia",
          field_credits: "Guillermo Franchella",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.infobae.com/new-resizer/jsnAO2bYQuDapEpPfOm0GMJm38w=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/F27257WJ7ZCMBFXABCEAG6LVVA.jpg",
        },
        {
          title: "Un paseo de lo más pancho",
          subtitle:
            "Además de un centro cultural de alto nivel, Munich es sinónimo de la alegría de vivir; hay que sumarse, eso sí, con buen humor, cerveza y salchichas",
          field_category: "Moda",
          field_credits: "Josefina Dotto",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://i9.photobucket.com/albums/a55/rosebud_05_/waterhouse_circe_offering_the_cup_t.jpg",
        },
        {
          title: "Con cachaça y alegría",
          subtitle:
            "El Mercado de Floripa esconde el Box 32 para saborear tragos y cigarros",
          field_category: "Brasil",
          field_credits: "Moe Zislak",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.lanacion.com.ar/resizer/ilFNj5fITUuB41yHBMiiyI4l4XU=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/UDJZH2LDPNEXPMFFJ5XJOTIXCA.jpg",
        },
        {
          title: "Instantáneas de Picasso",
          subtitle:
            "Varios retratos del pintor, tomados por un amigo, se exponen en Weast Palm Beach; en Alemania, una muestra celebra la alegría de vivir",
          field_category: "Histórico",
          field_credits: "Homero Simpson",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://masdearte.com/media/n_fotografia_picasso.gif",
        },
        {
          title: "Arrail do Cabo, fiel a su estilo brasileño",
          subtitle:
            "Este lugar exhibe sus calles de cuento, además de una vida sosegada y alegría contagiosa, todo para disfrutar a pleno",
          field_category: "Histórico",
          field_credits: "Eber Luduenia",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://caminhoslanguages.com/wp-content/uploads/2021/11/Party-Food-in-Brazil.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
        },
        {
          title: "Una vez más, Papá Noel borra las fronteras",
          subtitle:
            "Father Christmas, Babbo Natale o Pére No‘l, según el país cambia el nombre, pero el espíritu de alegría es siempre el mismo",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Alegria",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.elcato.org/sites/default/files/styles/story_tablet/public/images/stories/papa_noel_1.jpg?itok=oWwG7Grn&timestamp=1420493604",
        },
        {
          title:
            'Hasta las blogueras con "vidas perfectas" tienen momentos de tristeza',
          subtitle:
            "Aimee Song, una del influencers más famosas del mundo, publicó un video contando el lado B de su vida.",
          field_credits: "Soledad Maradona",
          field_category: "Últimas Noticias",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://resizer.glanacion.com/resizer/CPHi0Ec_qIrOyexANzY0qoqlkMI=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EMBNWCTP2NGU5JMSJOW4N5XKMI.jpg",
        },
        {
          title: "Cómo combatir la flacidez facial y bolsas en los ojos",
          subtitle:
            "Evitar el efecto “tristeza” del rostro es más fácil de lo pensado: alimentación, dermocosmética y protección ante factores externos son los grandes aliados",
          field_credits: "Patricia Gallardo",
          field_category: "Belleza",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://resizer.glanacion.com/resizer/PJK-nsqqYmKhJFbNLB2bUlpaEsU=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QYW5FLT22BAZTLKGSDJLVW3LBE.jpg",
        },
        {
          title: "El Nahuel Huapi sigue mordiendo el anzuelo",
          subtitle:
            'A la pesca por el Brazo de la Tristeza, al sudoeste del lago"',
          field_credits: "Carlos Milonga",
          field_category: "Histórico",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.patagoniaandina.com/wp-content/uploads/2020/04/Portada-Nahuel-Huapi.jpg",
        },
        {
          title: "Tristeza no tiene fin",
          subtitle: null,
          field_category: "Históricría",
          field_credits: "-",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://revistasudestada.com.ar/media/cache/3c/fc/3cfc65fe79a24a141b6d59143b013577.jpg",
        },
        {
          title: "El Nahuel Huapi sigue mordiendo el anzuelo",
          subtitle:
            "A la pesca por el Brazo de la Tristeza, al sudoeste del lago",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.patagoniaandina.com/wp-content/uploads/2020/04/Portada-Nahuel-Huapi.jpg",
        },
        {
          title: "Luces y sombras de Dickens",
          subtitle:
            "La casa del autor de  David Copperfield  , hoy museo, encierra tanto sus momentos de alegría como circunstancias de profunda tristeza",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://static.abc.es/Media/201112/08/OBJ3820406_1--644x362.JPG",
        },
        {
          title: "Luces y sombras de Dickens",
          subtitle:
            "La casa del autor de  David Copperfield  , hoy museo, encierra tanto sus momentos de alegría como circunstancias de profunda tristeza",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://static.abc.es/Media/201112/08/OBJ3820406_1--644x362.JPG",
        },
        {
          title: "Ocio y negocios",
          subtitle:
            "Rusia gana terreno. Turismo en Palermo. Todos al congreso. Chau tristeza. Un teléfono clave. Canadian pasa revista. Confort en el aire. Avis lo ayuda. ¡Pronto, Roma!",
          field_category: "Histórico",
          field_credits: "-",
          emotion: "Tristeza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.laizquierdadiario.com/local/cache-vignettes/L720xH405/arton52252-19695.jpg?1657463669",
        },
        {
          title:
            "El misterio de Marilyn Monroe, las cintas inéditas, el nuevo documental de Netflix",
          subtitle:
            "En la película que se estrena el próximo 27 de abril se verán grabaciones que intentan reconstruir los últimos días de la renombrada actriz, que murió a los 36 años",
          field_credits: "Mariana Copland",
          field_category: "ACTUALIDAD",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/qxKngxL5Nur2MeHmLBL4Krk3XNQ=/1200x800/filters:format(webp):quality(80):focal(245x253:255x243)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7UNNKOZCBRALPNZQVFJCAU5ZOI.jpg",
        },
        {
          title:
            'Boy Olmi: "La estabilidad de la pareja es un misterio y pende de un hilo"',
          subtitle: "null",
          field_credits: "María Eugenia Castagnino",
          field_category: "Historias",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/CcclOgU2PjCyt38hUc3Dt746VSs=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HLFXAK7AGVAWRG62IUHHDJVYSU.jpg",
        },
        {
          title:
            "Los hijos son un misterio: algunas pistas para entenderlos mejor",
          subtitle: "null",
          field_credits: "Lucila Cornejo",
          field_category: "Maternidad y crianza",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/QR4ta6wF04QRIfktCqz62v7TE24=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/UIXKXCXAGFD5VJFAPU4LG7J7YM.jpg",
        },
        {
          title: "El misterio de los sobris",
          subtitle: null,
          field_category: "Familia",
          field_credits: "Soledad Simond",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/dQlERWWQvZCmm7wZautpQ67DijQ=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/X35LQMI465FZZMVAUQKKKT66EE.jpg",
        },
        {
          title: "Noches de crimen y misterio",
          subtitle:
            "Recorridos nocturnos por la ciudad de Buenos Aires para descubrir un poco más de los casos policiales más renombrados de la historia, con visitas al lugar del asesinato y a cementerios",
          field_category: "Crimen",
          field_credits: "Alejandro Rapetti",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/ZQ8joREwwB43GgRRHS4Sdr-IZH8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/T57DU6L5CZD27L7VWYP4YIAZKQ.jpg",
        },
        {
          title:
            "Dioses, demonios y misterio en los templos de Angkor Wat de Camboya",
          subtitle:
            "Un recorrido místico por estas milenarias ruinas asiáticas",
          field_category: "Viajes",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/nY0BhgpiGpOrBdLWmcY2dLpqs1Q=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/76F4LARLUZHBPOGVJ3SSVSRCLA.jpg",
        },
        {
          title: 'Por qué el amor nunca "cierra"',
          subtitle: "Un diálogo filosófico para dilucidar el misterio del amor",
          field_category: "Filosofía",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/6UOQOyu8xpf-Q0bt3fePjizyHFY=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5SYQEIW5GBEWXKDKTSNCJNBEOA.jpg",
        },
        {
          title: "Los mejores secretos de agosto de nuestras lectoras",
          subtitle:
            "Estas son las cosas que no le contás a nadie; ¿cuál es tu misterio mejor guardado?",
          field_category: "Mente",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/Nyc2IuVlZbz62CJK9YADcv55p8k=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GS5TOVHAVBEH5JMWZTSQLXJLIY.jpg",
        },
        {
          title: "De Perú a Zimbabue, cinco destinos que son un misterio",
          subtitle: null,
          field_category: "Viajes",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/Hhuam1P-_Jdct4g7eOqlgveKwYg=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SOOYRW56CBB3TAF4N7VMC6CYRE.jpg",
        },
        {
          title: "Cuando el destino es un misterio",
          subtitle:
            "Las rocas de Stonehenge, las líneas de Nazca, los moáis de Pascua y otras maravillas del pasado con más enigmas que certezas |  Páginas 6 y 7",
          field_category: "",
          field_credits: "Soledad Villamil",
          emotion: "Misterio",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/609949.jpg",
        },
        {
          title:
            "“No puedo pararme frente a un espejo”. La demoledora reflexión de Emma Thompson sobre el desafío de mirarse a sí misma",
          subtitle:
            "La actriz británica dejó a todos sin palabras en la rueda de prensa de Leo Grande durante el Berlinale",
          field_credits: "Adrian Suarez",
          field_category: "ACTUALIDAD",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/ySeONN0MUFMuhaDQD1ElvG3aduM=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/NEULZZ5VRVB5PIXPOM7H42RYZA.jpg",
        },
        {
          title: "7 programas para salir de la rutina",
          subtitle:
            "Arte, gastronomía, teatro para los chicos, un espacio de reflexión, mantras y cantos sagrados y una expo sobre el universo de las bicicletas son algunas de las propuestas que tenemos en la agenda.",
          field_credits: "Pikin Bailando",
          field_category: "Recorridos",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/e_DS1FnZ0T4eBnORkqld-lkB9YM=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KL7PYOKBRBERJM7SOPTMSFLT6A.jpg",
        },
        {
          title:
            "Arte en la playa para chicos, concursos creativos, música, ferias y más propuestas",
          subtitle:
            "Este fin de semana la agenda se nutre con actividades para todos: hay talleres para chicos en la costa, una feria de retazos y textiles, un evento para bailar en la calle, concursos para los vinculados a las artes dramáticas, un ciclo de reflexión y un festival musical.",
          field_credits: "Raimundo Rueda",
          field_category: "Últimas Noticias",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.infobae.com/new-resizer/PrTu0VbAyGreVfM1rt8967r5p9g=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/3LBNKGW32FBOBBLHKRQY7EJRGI.jpg",
        },
        {
          title:
            "Arte en la playa para chicos, concursos creativos, música, ferias y más propuestas",
          subtitle:
            "Este fin de semana la agenda se nutre con actividades para todos: hay talleres para chicos en la costa, una feria de retazos y textiles, un evento para bailar en la calle, concursos para los vinculados a las artes dramáticas, un ciclo de reflexión y un festival musical.",
          field_category: "Viajes",
          field_credits: "Homero Simpson",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.infobae.com/new-resizer/PrTu0VbAyGreVfM1rt8967r5p9g=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/3LBNKGW32FBOBBLHKRQY7EJRGI.jpg",
        },
        {
          title: "Sumergida en un mar de libros. Una reflexión ferial",
          subtitle: null,
          field_category: "Literatura",
          field_credits: "Carina Durn",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/jDMRX2TPUwSRPMkanmVhKcFEvPE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SWFOSSJYORGTLMJC2WDCU3LRCQ.jpg",
        },
        {
          title: "¿Seguís sin pareja? No sos la única",
          subtitle:
            "Quizá hayas visto el corto autobiográfico 35 and Single, que disparó esta inquietud en las redes sociales y nos despertó esta reflexión interna que queremos compartir con vos.",
          field_category: "Amor",
          field_credits: "Marge Simpson",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/V6kIDBlQ7B0jzSMdzD6Wv_D0D24=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/S4ISWF3Y5ZF3VGZ34Z4ZJV2JHU.jpg",
        },
        {
          title: "La movida del otoño, en las paredes",
          subtitle:
            "Aportan color, un nuevo pensamiento, una sonrisa o una reflexión en las paredes de la ciudad. Observamos sus obras mientras caminamos pero, ¿quiénes son sus creadores? ¡Descubrilos!",
          field_category: "Mente",
          field_credits: "Susana Pampin",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/Dml3iNURTVj1gQIvWpIIhsrlrnM=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3YPEAOXAOVAFNLVCCFODFZ7FMI.jpg",
        },
        {
          title: '"Contar con alguien en quien descansar"',
          subtitle:
            'Felicitas Rossi, directora de OHLALÁ!, comparte con nosotras una reflexión sobre el amor; "Los términos «bueno» y «boludo» parecieron juntarse para confundirnos en nuestras elecciones; buscamos hombres cancheros, superados... pura cáscara con el paso del tiempo"',
          field_category: "Mujer",
          field_credits: "Soledad Villamil",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/Q5gYW7GqDIpPHxSubIIzYtV0R7k=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FNR54WPRGNHXLMPEKI2MSO5OPY.png",
        },
        {
          title: "Reflexión adulta",
          subtitle: null,
          field_category: "Mente",
          field_credits: "Moe Zislak",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.redaccion.com.ar/wp-content/uploads/2021/06/20210614_Newsletters_oxigeno.jpg",
        },
        {
          title: "¿Qué espera un hijo de una madre?",
          subtitle:
            "Cuando falta muy poco para festejar su día, una reflexión sobre la maternidad en la actualidad; ¿qué opinás sobre el tema?",
          field_category: "Maternidad",
          field_credits: "Marge Simpson",
          emotion: "Reflexion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/kuMiCvhR4rrGAq8_wC3IrrNXGm8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PWN42MYVB5AHZGO3RADGGTQ464.jpg",
        },
        {
          title:
            "Después de que los estafaran, armaron su bondi-casa y hoy viven frente al mar",
          subtitle:
            "Recorrieron el país para salir a surfear y se enamoraron de la naturaleza de Chapadmalal. Luego de perder todo el dinero que habían ahorrado, emprendieron el proyecto que cambiaría sus vidas para siempre.",
          field_credits: "Carmen Güiraldes",
          field_category: "Historias",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/Bkzu9eFaevbZNkMNWmeAquEvrsw=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ATNUZ2ZQV5GYFFWO4JVX4PCDBA.jpg",
        },
        {
          title:
            "Recorrido para comer en medio de la ciudad, pero rodeada de verde",
          subtitle:
            "Te proponemos lugares que tienen jardines ocultos, huertas a metros de las mesas, entre otras opciones para que reconectes con la naturaleza ",
          field_credits: "Gisela Carpineta",
          field_category: "Histórico",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/L9eTBK0CFnuPI14luS-BrBwCEUI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CKBL6ZJ6HZEKTGUB3AXG5PLCNE.jpg",
        },
        {
          title:
            "Ideas deco: una diseñadora nos cuenta cómo remodeló su casa de Manzanares",
          subtitle:
            "Marisa Flores armó su propio refugio de campo lleno de color, naturaleza y detalles heredados; ¿Cómo es soñar la casa para que haya encuentro y calma?",
          field_credits: "Soledad Avaca Cuenca",
          field_category: "ACTUALIDAD",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/dGMQHJfcg9hOnjXipFvUUYWiZR8=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SP4TAVAMIZBK5NO2W6RNTOOJYI.jpg",
        },
        {
          title:
            "Semana Santa en Mar del Plata: qué hacer para conectar con la tierra, el mar y el arte",
          subtitle:
            "Una selección de propuestas para conocer la ciudad costera en total contacto con la naturaleza",
          field_category: "Gastronomia",
          field_credits: "Laura Gambale",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/FaJPBTt1JQdSEbgrwaxev2mo6AU=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QRNHTL7FGBAZTCA54GR6DRLKBM.jpg",
        },
        {
          title:
            "6 maravillas patagónicas ocultas que tenés que visitar y que no vas a creer que están en Argentina",
          subtitle:
            "Viajamos a lugares ocultos de nuestro sur para sorprendernos con la naturaleza. ¿Venís?",
          field_category: "Viajes",
          field_credits: "Marge Simpson",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/5hrCXb16FgnEzr_6IYXZvAzb4PY=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WRDRPFQS7NFGJMZR6E2OOETTII.jpg",
        },
        {
          title: "La luna de gusano: por qué se llama así",
          subtitle:
            "En el hemisferio norte la relacionan con el inicio de la primavera, la vinculan con el renacer de la naturaleza; acá, de este lado del mundo, también aprovechamos para descubrir sus misterios ",
          field_category: "Viajes",
          field_credits: "Ezequiel Brahim",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/WbZcpradUvOoCwu8LwoYbgMMeRQ=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/LLMGQ5KD5FHJRIJZDKJ6APLWSY.jpg",
        },
        {
          title:
            "Antes del estreno de Outlander, charlamos con Caitriona Balfe: “No está en la naturaleza de Claire ser la persona vulnerable”",
          subtitle:
            "La nueva entrega llega a Star+ el próximo miércoles 9 de marzo",
          field_category: "Cultura",
          field_credits: "Soledad Venesio",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/XwdyesPUwLz8uoRnLo2OLEqxPLE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FRULF6GMD5H6BOMBXN6TODBDOA.jpg",
        },
        {
          title:
            "¿Cómo es el Walüng Patagonia, uno de los festivales de música electrónica más exclusivos de Argentina?",
          subtitle:
            "En medio de la naturaleza, en San Martín de Los Andes se celebró la segunda edición de esta fiesta que presentó un lineup de lujo",
          field_category: "Viajes",
          field_credits: "María Paz Moltedo",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/aKNkbTLa6lHvqQJZQXFhhJ57dY0=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MFADZWYM5JD2NOY2FVINCPFQOY.jpeg",
        },
        {
          title:
            "Vive en Ituzaingó y construyó una casa circular. “Da la sensación de estar inserto en un bosque”",
          subtitle:
            "De estilo modernista, en su diseño mandan el verde, el juego y la niñez",
          field_category: "Moda",
          field_credits: "Ana Paula Queija",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/tzKGfm8JqmcoAztoOM70qaGCgK0=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/NDUBGW6MF5BU3PQYSFFWTBWJMY.jpg",
        },
        {
          title:
            "Estirá los findes: 4 lugares para armarte unas minivacaciones",
          subtitle:
            "Esta es nuestra selección de sitios a los que podés irte en una escapada de pocos días, pero que te garantizan naturaleza, aire libre y distención",
          field_category: "Viajes",
          field_credits: "Romina Salusso",
          emotion: "Naturaleza",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/Gy2156AnIBrlEX1dK2h1EZXOV2E=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WTZPBCWX4RFCTNIQKOOBTO6EMM.jpg",
        },
        {
          title:
            "Pilar: recorré sus calles en clave gourmet, de compras, diversión o relax",
          subtitle: "null",
          field_credits: "Gisela Carpineta",
          field_category: "Histórico",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/avzoh0dWfUc1IVM-f2ZfrdeEGzE=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KDRLXVMACFDW5MKAN5RJNOUSLQ.jpg",
        },
        {
          title: "6 hoteles pensados para niños",
          subtitle:
            "Con habitaciones y servicios especialmente ideados para ellos, podés vivir una experiencia completamente diferente y asegurar diversión y relax para todos.",
          field_credits: "Jimena Barrionuevo",
          field_category: "Histórico",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/WaGvpwRv2p7QPNQkdHXCdkhYml0=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HZ7FQTDZG5HMVB2JJJIWHPUAGI.jpg",
        },
        {
          title:
            "Entre bratwurst y Playmobil: conocer Núremberg con los chicos",
          subtitle:
            "ALEMANIA. El Museo del Juguete, el Castillo de Faber Castell y el parque de Playmobil, tres espacios que convocan a la sorpresa, la diversión y la nostalgia",
          field_credits: "María Fernanda Lago",
          field_category: "Histórico",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/KzjPyf42T_2HllVIDwFe-C6NU9w=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/2TP3GR2CJFEELP4TXFVM4OETOA.jpg",
        },
        {
          title: "6 parques acuáticos brasileños de Camboriú a Fortaleza",
          subtitle:
            "Por su condición de país con 8000 km de litoral y clima tropical, Brasil se presta para la diversión acuática.",
          field_category: "Viajes",
          field_credits: "Homero Simpson",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/kM344KLHVs0VIOJz874EqC3_iyg=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HIPCHVA26ZB45FZL42ZA5IF2A4.jpg",
        },
        {
          title: "Moda: noche de amigas",
          subtitle: "Equipos para una salida a pura diversión",
          field_category: "Moda",
          field_credits: "Susana Villamil",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/iQtwBM-L2bo2_FqYAHIPtz1pSjI=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TK3FKT5ZSZA6HH7PUFATTQY6LE.jpg",
        },
        {
          title: "Sexo: técnicas para darte tu propio placer",
          subtitle:
            "La soltería es una etapa genial para el autodescubrimiento y la diversión. Hacete cargo de tu libido y no la dejes en stand by.",
          field_category: "Amor",
          field_credits: "Romina Zanellato",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/Hzg3n6wtwU39b1cMaYEqDjdvQGs=/1200x800/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SAYFGRLMXJGT3HPJDJKG4VCVQE.jpg",
        },
        {
          title: "5 nuevas formas de hacer ejercicio",
          subtitle:
            "Las nuevas tendencias fitness prometen llegar a un cuerpo saludable en menos tiempo y con más diversión. A continuación, te contamos qué podés hacer para estar en forma.",
          field_category: "Salud",
          field_credits: "Susana Pampin",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/YZ1GG3J7HVJbZFNSjcKtVZL-ulU=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/23RXYE5KERBMPAZL7THR3IKGGA.jpg",
        },
        {
          title: "Premios, diversión y mucha actitud en el cierre de BAFWEEK",
          subtitle:
            "Ya te mostramos algunos looks de la Always Platinum Party que cerró la semana de la moda a puro glamour. Ahora te contamos un poco más de lo que pasó en la fiesta, para que no te pierdas ningún detalle.",
          field_category: "Moda",
          field_credits: "Susana Villamil",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/bafweek_0.jpg",
        },
        {
          title: "Emociones fuertes en el lado b de la montaña",
          subtitle:
            "Bariloche. En Catedral y en el cerro Otto, snow bikes, donas y trineos retro para ampliar el menú de actividades y posibilidades de diversión en la nieve",
          field_category: "Viajes",
          field_credits: "Soledad Maradona",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/E3SPudLd4wdrk0hD_VPUiBP5mpE=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4AGPS47G3NHPJI3I7G2MXXQ7Q4.jpg",
        },
        {
          title: "Sin nieve, con diversión",
          subtitle:
            "En las pistas del centro de esquí, un tobogán gigante y otras propuestas de aventura",
          field_category: "Viajes",
          field_credits: "Susana Pele",
          emotion: "Diversion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.tiempoar.com.ar/wp-content/uploads/2021/07/20210801Cerro-Catedral-2.jpg",
        },
        {
          title: "Una meditación para cortar con la rutina.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          field_credits: "Paz Azcárate",
          field_category: "Últimas Noticias",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/HnPATmgrCHhUbjpu474KfJOvU-c=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H42UTHCQRBD7VPIZNKIT5LLYRM.jpg",
        },
        {
          title:
            "Michelle Obama. 5 claves para encontrar tu voz y contar tu propia historia",
          subtitle: "null",
          field_credits: "Paz Azcárate",
          field_category: "ACTUALIDAD",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/TgMd6sZosWKnFiP1OSQ4W-FXOEc=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KXVOGWY7Y5ACFOCPMHGKBGIOHE.jpg",
        },
        {
          title:
            "De la idea a la acción. 10 claves para hacer realidad tu proyecto emprendedor",
          subtitle: "null",
          field_credits: "Paz Azcárate",
          field_category: "ACTUALIDAD",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/iLuw8Mz6XCQ0o7BTaPH5XTgEtGw=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TAQKBTQRNRHEJKD7UNHQ53RL3U.png",
        },
        {
          title:
            "Encontrar tu paz: herramientas para adquirir seguridad en el cuerpo, la mente y las emociones",
          subtitle:
            "En tiempos de incertidumbre, los espacios de calma interior se vuelven una elección consciente; preguntas y ejercicios que pueden servirte de guía en este proceso",
          field_category: "Mente",
          field_credits: "Susana Pampin",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/zVwexocG9qn3GOFn5JaPbP1y2Ig=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SBYLK2AIDBFWRFX7OKRK7UUH34.jpg",
        },
        {
          title: "Semana Santa: 5 lugares de Córdoba que vas a querer visitar",
          subtitle:
            "Desde la ciudad capital, con mucho patrimonio jesuítico, hasta parapente en las sierras, pasando por propuestas gastronómicas de calidad; opciones para todos los gustos",
          field_category: "Viajes",
          field_credits: "Gabriela Origlia ",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/DQWQAVSBL3jaNwzbli4Sg5uqrh0=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SQRVCKVJJFGSDLLJ76ZY2TOWHE.jpg",
        },
        {
          title:
            "La fuerza del linaje: integrar la historia familiar es una forma poderosa de darnos permiso para vivir con paz y autonomía nuestra propia vida",
          subtitle:
            "La terapia sistémica, y las constelaciones en particular, muestran cada vez más cómo todo lo que ocurrió en nuestra familia se convierte en recursos de nuestro sistema familiar; a veces estos recursos nos ayudan",
          field_category: "Mente",
          field_credits: "Cecilia Alemano",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/3gutH3au1DWV5_xSlO8JN_GIwt0=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CJWVQEYYRZG3RN7OALJGWGH6TM.jpg",
        },
        {
          title:
            "De Córdoba y con toda la onda: el estilo de la música y cantautora Zoe Gotusso",
          subtitle:
            "Estuvimos charlando con esta promesa de la música local, que además de haberse lanzado como solita tiene un pasión que nos interpela: la moda. No te pierdas sus looks.  ",
          field_category: "Musica",
          field_credits: "Paz Azcárate",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/gXTMiN3-R0kao3Lw8A9R8nK0sNU=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/X4AY5ALTBRGKHM6PZBB6TEV4ZQ.jpg",
        },
        {
          title:
            "Ahora podés dormir en la suite donde John Lennon y Yoko Ono hicieron su bed-in por la paz",
          subtitle:
            "Ambientada como en los 60 y con una experiencia de realidad virtual para sumergirte en aquel momento.",
          field_category: "Viajes",
          field_credits: "Susana Pampin",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/0l3IdSy2_oXP_6jnFEF2drHMG10=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/47AR2GDUEZGR7GRYKRDQJ62W5M.jpg",
        },
        {
          title: "¿Cuánto costará veranear en las sierras de Córdoba?",
          subtitle:
            "Con aumentos de entre el 15 y el 20%, hay propuestas hoteleras, de cabañas y de alquiler para todos los presupuestos según la región de la provincia",
          field_category: "Viajes",
          field_credits: "Gabriela Origlia ",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/LA8KDDB8ypek0zBjNkkfs3hIrbg=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/6WPPW53CZRFDPMJWABEN7MGVF4.jpg",
        },
        {
          title:
            "Kim Kardashian y Katy Perry, algunas de las famosas que se entregan a los cristales de cuarzo para salvar a Hollywood",
          subtitle:
            "En busca de la paz espiritual, cada vez son más los artistas que se entregan a las energías de las piedras para alejarse de las malas ondas. En esta nota, te contámos quiénes son.",
          field_category: "Espectaculo",
          field_credits: "Susana Villamil",
          emotion: "Paz",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/-qUYL0z91DIv3VIqBdg4o8nhQWc=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FTPFTVGUGBHC3CI2IK6GBHJLWQ.jpg",
        },
        {
          title:
            "Horóscopo de mayo. ¿Qué traen los astros para este nuevo mes?",
          subtitle:
            "Amor y sexo, dónde tomar acción, tus desafíos y oportunidades. Anticipate a lo que viene con este horóscopo signo por signo. ",
          field_credits: "Ana Bilsky",
          field_category: "Astrología",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/QgWJ4iCGX7wSO9V9SbiIjnHRHwE=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/LZW45FWX2ZHOZNJH56PONFIYBY.jpg",
        },
        {
          title:
            "Conoció a su marido en Tinder y hoy es la primera CEO de la aplicación de citas más popular del mundo: ¿quién es Renate Nyborg?",
          subtitle: "Una historia de amor y liderazgo",
          field_credits: "Nathalie Jarast",
          field_category: "Historias",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.lanacion.com.ar/resizer/rsE0zIxDcmYH6GFUjVx-fB2kFjo=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/DQTLKSVXKRF7LGXWBF3THEP3QI.jfif",
        },
        {
          title:
            "Luciano Lutereau y Verónica Buchanan hablan de parejas abiertas, citas virtuales y el nuevo amor tecnológico",
          subtitle:
            "En su último libro, Adiós al matrimonio, el psicoanalista analiza la nueva configuración de las parejas; junto a su compañera y colega esperan un hijo; en esta entrevista hablan sobre los desafíos de compartir una vida de a dos",
          field_credits: "Ana Paula Queija",
          field_category: "ACTUALIDAD",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/LrO2MVtKfyNRMuwyN3wxUPjyzD8=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CD4J3BNBU5C6BOVIKC5YTENMFA.jpg",
        },
        {
          title:
            "La China Suárez y Santiago Celli estrenaron “El Juego del Amor”: mirá el video de la canción",
          subtitle:
            "La unión de ambos artistas nació a principios de este año, cuando se conoció que la actriz se lanzaría como cantante solista; la canción que presentaron está producida por Ale Sergi y Cachorro López",
          field_category: "Musica",
          field_credits: "Ale Sergi",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/Xo48r-0kqx33r1oPzy78O_h0l4U=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VZ6O72WNPZDWNOKUCMWVG5C4MQ.JPG",
        },
        {
          title:
            "Ella tiene 95 años y él casi cien: los secretos de una historia de amor que lleva siete décadas",
          subtitle:
            "Pasaron 68 años desde que se casaron; Piru y Victor dicen que están tan enamorados como el primer día; la pareja nos cuenta cuáles son los secretos de un matrimonio largo y feliz",
          field_category: "Amor",
          field_credits: "Karina Korn",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/EnLC782BwnuvFlsLOHNHFLzOhhM=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/BHCAE2RUBVBOTJYLWUFGF73JD4.jpg",
        },
        {
          title:
            "“No quiero tu Instagram, quiero tomar vino con vos”: ¿quién es el artista argentino que deja mensajes de amor en las calles de Buenos Aires?",
          subtitle:
            "Su poesía visual nos inspira y nos invita a una conexión más real.",
          field_category: "Cultura",
          field_credits: "Ayelén Di Leva",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/g05GQXII2UwrzJic_JlkUP7ncyQ=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PANWX6ZZWZDWTEO22SSKB5GZKU.jpg",
        },
        {
          title:
            "Quién es Eugenia Quibel, el último gran amor de Gerardo Rozín",
          subtitle:
            "El conductor y productor rosarino murió a los 51 años; su compañera es locutora y trabajó con él en varios proyectos, el último, Morfi",
          field_category: "Amor",
          field_credits: "Homero Simpson",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/c7xPyCm5uj0gGxuvm3N8RIOpW6M=/1200x800/filters:format(webp):quality(80):focal(395x483:405x473)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7BTCEVMZHZEYZLDKK2PURZLLNE.jpeg",
        },
        {
          title:
            "¿Qué tenés que saber de Pura Sangre, la nueva obra de Griselda Siciliani en Multitabaris COMAFI?",
          subtitle:
            "Con una puesta en escena minimalista y una mirada crítica sobre el amor, nos preguntamos si logra lo que promete desde su premisa",
          field_category: "Cultura",
          field_credits: "Soledad Venesio",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/Q4KZ080UdFnXx2iRLE4BlQY4rlk=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CBB7OMBPXFFOFM56AEOTYG5B4M.jpg",
        },
        {
          title:
            "6 libros de literatura erótica que son ideales para encender tus fantasías",
          subtitle:
            "Desde historias de amor subidas de tono hasta narrativas más explícitas",
          field_category: "Literatura",
          field_credits: "Soledad Venesio",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/xDb_-CqCd9KXa-A3mMpu-Rjv9yc=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/JJOK55IHEZDH5IVGY7RBONKADQ.jpg",
        },
        {
          title:
            "Después de adoptarla, el veterinario les confirmó que estaba enferma y durante dos semanas luchó por su vida. “Nori nos dio una noción de familia”",
          subtitle:
            "El amor es la forma más genuina de comunicarnos con nuestras mascotas y es sumamente eficaz para lograr una convivencia armónica y responsable",
          field_category: "Animales",
          field_credits: "Margo Robi",
          emotion: "Amor",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/XpNh2EvZ2HJt1ebePe6-O4GuEWY=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/I3L6SA4SSJB5JHLS47BF2ZKUSM.jpg",
        },
        {
          title: "San Valentín: 7 escapadas para celebrar el amor",
          subtitle: "Reavivá la pasión con estas escapadas de a dos.",
          field_credits: "Ludmila Moscato",
          field_category: "Últimas Noticias",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/N6C2wbwQ1Tmbq0DxmtcwKq2jtHM=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MDZ3ORUAP5A6PFR3C7Y5LG2VII.jpg",
        },
        {
          title: "En 7 meses creó su marca de joyas: cómo lo hizo",
          subtitle:
            "La florista Bárbara Pepe consolidó Paisajita, la marca de joyería botánica que une su pasión por la naturaleza y lo artesanal.",
          field_credits: "Laura Cedeira",
          field_category: "Histórico",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/_9x9CUGGA4ht1XhiEAUupVKN90M=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PS2W5JUP2BGPHENY3E7SPO4O6A.jpg",
        },
        {
          title: 'Inés Estévez. "El turista típico altera el paisaje"',
          subtitle:
            "Tours con obras de teatro y con shows musicales, vacaciones de Brasil a Bután... La actriz no sobreactúa su pasión por los viajes",
          field_credits: "Benjamin Vicuña",
          field_category: "Histórico",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/EumFKBzzrF5OUm3BdegxAl4vZnI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KQG4A6QX2ZEBBPHRXCDK5ILZGU.jpg",
        },
        {
          title:
            "De Córdoba y con toda la onda: el estilo de la música y cantautora Zoe Gotusso",
          subtitle:
            "Estuvimos charlando con esta promesa de la música local, que además de haberse lanzado como solita tiene un pasión que nos interpela: la moda. No te pierdas sus looks.  ",
          field_category: "Musica",
          field_credits: "Paz Azcárate",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/gXTMiN3-R0kao3Lw8A9R8nK0sNU=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/X4AY5ALTBRGKHM6PZBB6TEV4ZQ.jpg",
        },
        {
          title:
            "Luna llena en Aries: ¿Qué significa y por qué tenemos nuestros deseos a flor de piel?",
          subtitle:
            "Con una luz en particular iluminando un sector de la carta natal, te contamos cuál es el impacto del fenómeno y qué decisiones deberías tomar esta semana",
          field_category: "Horoscopo",
          field_credits: "Luisa Herlax",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/TMyDITxrgQF-6qcfgVH11YedcW4=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OKWIRBB5R5FWZL3MWT4H7OJEPM.jpg",
        },
        {
          title:
            "5 Yardas: una exLeona y una publicista la rompen organizando los mejores eventos",
          subtitle:
            "Se conocieron jugando al hockey y su pasión por el deporte las llevó a crear una agencia que factura 12 millones de pesos por mes",
          field_category: "Amor",
          field_credits: "Stefania Dommarco",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/yyEwK_kfmFjO5NrLV7GuBDN8u24=/1200x800/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/6C73EXJVIVGBFFGMO4SNZSGM4M.JPG",
        },
        {
          title:
            "Las Rojas: lo que tenés que saber sobre la nueva película de Mercedes Morán y Natalia Oreiro",
          subtitle:
            "Las actrices comparten cartel por primera vez en un western femenino que exalta la pasión por encima del materialismo",
          field_category: "Espectaculo",
          field_credits: "Jessica Blady",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/ZsbKLnKSMswdvariARbaUI2cRNw=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/2XFDVWYXWVBT5GDYJIQLIV6LFI.jpg",
        },
        {
          title:
            "Economía de la pasión: las redes sociales, aliadas para capitalizar (y monetizar) la creatividad",
          subtitle: null,
          field_category: "Cultura",
          field_credits: "Violeta Galanternik",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/h1OnTHHIqziq5MryYpoqPkKpgBI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PDEQWEZJT5GGTLZGYHKEISZETY.jpg",
        },
        {
          title:
            "Madre e hijas unidas emprenden juntas por una pasión: hacer carteras lindas y accesibles",
          subtitle: null,
          field_category: "Maternidad",
          field_credits: "Daniela Chueke Perles",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/BD7MQtJ4lyLOoS5U6mbOmxYUeIQ=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3TILAAODNHHNG2DOF7U7CTPSI.jpg",
        },
        {
          title: "Laura Laprida enciende nuestra moda roja",
          subtitle:
            "Faldas, pantalones, vestidos, tops y camperas. Todo se lleva en el color de la pasión. Mirá los conjuntos que armamos.",
          field_category: "Moda",
          field_credits: "Laura Laprida",
          emotion: "Pasion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://resizer.glanacion.com/resizer/l5bBShWKBPrV2w7avUQhsit_uIk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/IP2FK6Y3MFEZHGA6FPRLWU7ZNE.jpg",
        },
        {
          title: "Tierra del Fuego: la aventura no tiene fin",
          subtitle:
            "Hasta el fin del mundo en una 4x4 con agua hasta las ventanillas, remando en botes de goma por el río Lapataia, o a pie entre lengas y coihues, otras maneras de... descansar",
          field_credits: "Ester Teican",
          field_category: "Histórico",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.clarin.com/img/2022/05/30/tierra-del-fuego-ofrece-un____aABkcRp-_2000x1500__1.jpg",
        },
        {
          title: "Muñecas bravas",
          subtitle:
            "Fútbol, hockey, rugby, skate... ellas también buscan acción. Se animan a todo y participan de los torneos reducidos que organizan diversos paradores",
          field_credits: "Roberto Galgo",
          field_category: "Histórico",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.lanacion.com.ar/resizer/JtWl-SDk3Lk5mW65mXFFGHvJzKI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/23GRHZVXRFBSRJUUMC3427NGTA.jpg",
        },
        {
          title: "Muñecas bravas",
          subtitle:
            "En un entorno que invita a la acción, se realizarála fiesta provincial de esta fruta",
          field_credits: "Jorge Perse",
          field_category: "Histórico",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary: "https://www.lanacion.com.ar/resizer/JtWl-SDk3Lk5mW65mXFFGHvJzKI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/23GRHZVXRFBSRJUUMC3427NGTA.jpg",
        },
        {
          title:
            "May Calamawy: la actriz egipcia-palestina que conquista Marvel y coprotagoniza la nueva serie Moon Knight",
          subtitle:
            "Disponible en Disney+ a partir de hoy, miércoles 30, la ficción nos trae mística egipcia y grandes escenas de acción",
          field_category: "Espectaculo",
          field_credits: "Soledad Venesio",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/6kR7avcz6FOLHyFF3H5yhS-2RwA=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SPWNZGWMCRF6TDTDLQJRWS2PBQ.JPG",
        },
        {
          title:
            "Mirá el primer avance de Bullet Train, el divertido thriller de acción protagonizado por Brad Pitt",
          subtitle:
            "Del director de John Wick y Deadpool 2, llega a los cines durante julio de este año",
          field_category: "Espectaculo",
          field_credits: "Soledad Venesio",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/dZbD6o47NhiB_rDtpd60oSxwLME=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/N7VC7Y7AARFNLBXLLJNWR2VOEI.jpg",
        },
        {
          title:
            "Día Mundial de la Educación Ambiental: 8 hábitos sustentables para poner en práctica este año",
          subtitle:
            "Algunas ideas fáciles y prácticas para que pongas en acción en tu rutina diaria",
          field_category: "Naturaleza",
          field_credits: "Inés Pujana",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/_fJubGRhH_pDIh8kmrn166HPNHg=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WDC62UBS4ZFRPIITEXJAEJ7SQA.jpg",
        },
        {
          title: "¿Qué series de televisión estrenan en noviembre?",
          subtitle:
            "Dramas, comedias y series de acción. Te contamos qué ficciones no deberías perder de vista.",
          field_category: "Espectaculo",
          field_credits: "Soledad Venesio",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://es.web.img2.acsta.net/newsv7/21/10/29/13/17/2060374.jpg",
        },
        {
          title:
            "Horóscopo de mayo. ¿Qué traen los astros para este nuevo mes?",
          subtitle:
            "Amor y sexo, dónde tomar acción, tus desafíos y oportunidades. Anticipate a lo que viene con este horóscopo signo por signo. ",
          field_category: "Horoscopo",
          field_credits: "Ana Bilsky",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/QgWJ4iCGX7wSO9V9SbiIjnHRHwE=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/LZW45FWX2ZHOZNJH56PONFIYBY.jpg",
        },
        {
          title:
            "Agenda verde: 10 temas urgentes que necesitan de la acción colectiva e individual",
          subtitle: null,
          field_category: "Naturaleza",
          field_credits: "Joy Schvindlerman",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/MCbeBCDeVO09GsI9fPWRoQJ0RUM=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VINLXDASYZBNPBV6HDBPO7KTJA.jpg",
        },
        {
          title:
            "Plan de acción. 3 cosas que tenés que hacer para cuando pase el Coronavirus",
          subtitle: null,
          field_category: "Salud",
          field_credits: "Monica Argento",
          emotion: "Accion",
          content: [
            { type: "Paragraph", content: "Una prueba" },
            { type: "Quote", content: "“Vos me proponés algo" },
          ],
          field_img_primary:
            "https://www.lanacion.com.ar/resizer/Bhi7iGRmL5xynEBZ_zGizaXKDpM=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HJMBOGRCUJDMBCX4WNW27EYTI4.jpg",
        },
      ]);
    } finally {
      mongoose.connection.close();
    }
  });
};

  connectToMongoDB();
