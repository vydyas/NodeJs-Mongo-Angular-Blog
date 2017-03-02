angular.module('singleController',['postServices']).
controller('singleController',function(postFactory,$routeParams,$scope){
   
    var self=this;
    var id=$routeParams.id;
   $scope.comments=[];

        postFactory.getArticle(id).then(function(response){
           $scope.article=response.data;   
           console.log($scope.article); 
        });

         postFactory.getComments(id).then(function(response){
           $scope.comments.push(response.data);   
           console.log($scope.article); 
        });
   
    self.comment=function(data){
            postFactory.postComment(id,data).then(function(response){
                   $scope.comments[0].push(response.data.data);
            self.form={};
            self.form.title="";
        });
    };

});