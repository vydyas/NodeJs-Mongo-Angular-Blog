angular.module('articleController',['postServices']).
controller('articleController',function(postFactory){

    this.form={};
    this.message=false;
    var self=this;
    this.publish=function(data){
        postFactory.newArticle(data).then(function(response){
                if(response.data.message=="success"){
                   console.log("Success");
                    location.href="#";
                }
        });
    };
});