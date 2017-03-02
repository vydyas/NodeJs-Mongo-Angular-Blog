var mongoose=require('mongoose');
var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

module.exports=mongoose.model('articles',{
    id: ObjectId,
    title: { type: String },
    title_sub: { type: String },
    content: { type: String },
    articleby:{type: String},
    articleid:{type:String},
    date: {type: Date, default: Date.now}
})
