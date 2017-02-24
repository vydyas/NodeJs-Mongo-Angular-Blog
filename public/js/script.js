const angularApp=angular.module('siddhu',['ngRoute']);

angularApp.config(['$routeProvider',(a)=>{

a.when('/',{
    template:'<p>Hello Siddhu.Info<a href="#!/about">..</a></p>'
}).
when('/about',{
    template:'<a href="#"><-</a><p>Freelance Full Stack Web Developer, Augmented Reality Expert, Java Programmer</p>'
})

}]);