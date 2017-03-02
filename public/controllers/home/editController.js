angular.module('editController',['postServices']).
controller('editController',function(postFactory,$routeParams){
   
    var self=this;
    var id=$routeParams.id;

        postFactory.getArticle(id).then(function(response){
           self.form=response.data[0];
           self.form.desc=response.data[0].content;
           });

     self.update=function(data){
        postFactory.updateArticle(id,data).then(function(response){
                location.href="#!/articles";
           }); 
     };
});