angular.module('homeController',['postServices']).
controller('homeController',function(postFactory,$scope){
   
    var self=this;
  
        postFactory.getAll().then(function(response){
           $scope.articles=response.data.reverse();    
        });
});