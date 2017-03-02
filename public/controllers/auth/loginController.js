angular.module('loginController',['postServices']).
controller('loginController',function(postFactory,$rootScope){
   
    var self=this;
    this.login=function(data){
       
        postFactory.login(data).then(function(response){
                if(response.data.success==true){
                    localStorage.setItem('isLogin', 1);
					localStorage.setItem('userData', JSON.stringify(response.data));
                    $rootScope.login=true;
                    $rootScope.data=response.data;
                    location.href="#";
                }else{
                    self.message=true;
                }
        });
    };
});