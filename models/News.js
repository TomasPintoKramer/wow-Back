const {Schema, model}=require('mongoose')
const newsSchema= new Schema({
    title:String,
    subtitle:String,
    field_credits:String,
    field_category:String,
    emotion:String,
    content: { type : Array , "default" : [] },
    field_img_primary:String,
    publication_date:Date
})

const News= model("News", newsSchema)

module.exports=News