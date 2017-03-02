var User=require('../dataset/users.js');

module.exports.signup=function(req,res){
    User.find(req.body,(err,response)=>{
        if(response && response.length==0){
            User.create({
                email:req.body.email,
                name:req.body.name,
                password:req.body.password
            },function(err,data){
                    if(err)
                        res.send(err);
                res.send({"message":"success","data":data});
            });
        }
    });
};

module.exports.login = function (req, res) {
    console.log(req.body);
	User.find(req.body, function (err, results) {
		var result = {};
		if (err) {
			console.log("Error !!");
		}
		if (results && results.length == 1) {
			req.session.data={'id':results[0]._id,'name':results[0].name};
			result['success'] = true;
			result['userData'] = {
				"username" : results[0].username
				, "id" : results[0]._id
				, "name" : results[0].name
				, "email" : results[0].email
			}
		}
		else {
			result['success'] = false;
		}
		res.json(result);
	})
};