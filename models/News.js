const {Schema, model}=require('mongoose')

const newsSchema= new Schema({
    title:String,
    subtitle:String,
    field_credits:String,
    field_category:String,
    emotion:String,
    content: { type : Array , "default" : [] },
    field_img_primary:String,
    publication_date:Date,
    url:String
})

newsSchema.pre('validate', function(){
return this.url=this.title.toLowerCase().replaceAll(" ", "-").replace(/[^a-záéíóúü0-9-]/g, "")
})

const News= model("News", newsSchema)

module.exports=News