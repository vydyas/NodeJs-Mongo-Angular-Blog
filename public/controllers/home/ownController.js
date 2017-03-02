angular.module('ownController',['postServices']).
controller('ownController',function(postFactory,$scope){
   
    var self=this;
var info=JSON.parse(localStorage.getItem("userData"));
        postFactory.getArticlesById(info.userData.id).then(function(response){
           $scope.articles=response.data.reverse();    
        });

    $scope.deleteArticle=function(id){
            postFactory.deleteArticle(id).then(function(response){
                 location.reload();
             });
    };

     $scope.editArticle=function(id){
        location.href="#!/article/edit/"+id;
    };
    
});