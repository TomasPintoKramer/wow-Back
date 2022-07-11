const {Schema, model}=require('mongoose')

const SectionSchema= new Schema(
    {
        title:String,
        schema:String
    }
)

const Section=model('section', SectionSchema)

module.exports=Section;