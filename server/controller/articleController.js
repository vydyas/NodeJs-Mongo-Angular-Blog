var Articles=require('../dataset/articles');

function getArticles(res) {
    Articles.find(function (err, Articles) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(Articles); // return all todos in JSON format
    });
};

module.exports.new=function(req,res){
  var title = req.body.title;
  var title_sub = title.split(' ').join('-');
    Articles.find(req.body,(err,response)=>{
        if(response && response.length==0){
            Articles.create({
                 title: title,
    title_sub: title_sub,
    content: req.body.desc,
    articleby:req.session.data.name,
    articleid:req.session.data.id
            },function(err,data){
                    if(err)
                        res.send(err);
                res.send({"message":"success","data":data});
            });
        }
    });
};

module.exports.deleteArticle=function(req,res){

        Articles.remove({
            _id: req.params.id
        }, function (err, article) {
            if (err)
                res.send(err);

           res.json(article);
        });
};

module.exports.deleteArticle1=function(req,res){

        Articles.find({
            _id: req.params.id
        }, function (err, article) {
            if (err)
                res.send(err);

            res.json(article);
        });
};

module.exports.getById=function(req,res){
    console.log({_id:req.params.id});

        Articles.find({articleid:req.params.id},function(err,article){
                if(err)
                res.send(err);

                res.json(article);
        });
};

module.exports.updateArticle=function(req,res){
 
    var title = req.body.title;
  var title_sub = title.split(' ').join('-');

Articles.findOneAndUpdate({_id:req.params.id},{title: title,
    title_sub: title_sub,
    content: req.body.desc}, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
         res.json({"success":true});
});
};

module.exports.getAll=function(req,res){
    getArticles(res);
};