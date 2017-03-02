var Comments=require('../dataset/comments');

function getComments(req,res) {
    Comments.find({postid:req.params.id},function (err, Comments) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(Comments); // return all todos in JSON format
    });
};

module.exports.new=function(req,res){

    var id=req.params.id;

            Comments.create({
                postid:id,
                name:req.body.title,
                comment:req.body.desc
            },function(err,data){
                    if(err)
                        res.send(err);

                res.send({"message":"success","data":data});
            });

};

module.exports.getComments=function(req,res){
    getComments(req,res);
};