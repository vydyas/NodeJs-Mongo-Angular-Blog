var mongoose=require('mongoose');
var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

module.exports=mongoose.model('comments',{
    id: ObjectId,
	postid: { type: String },
	name: { type: String },
	comment: { type: String },
    date: {type: Date, default: Date.now}
})
