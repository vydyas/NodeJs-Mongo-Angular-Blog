angular.module('postServices',[]).factory('postFactory',function($http){
var services={};

services.get=()=>{
       return $http.get('api/posts');
};

services.post=(data)=>{
       return $http.post('api/post',data);
};

services.login=(data)=>{
       return $http.post('api/login',data);
};

services.newArticle=(data)=>{
       return $http.post('api/articles/new',data);
};

services.getAll=()=>{
       return $http.get('api/articles/all');
};

services.getArticlesById=(id)=>{
       return $http.get('api/articlesbyId/'+id);
};

services.updateArticle=(id,data)=>{
       return $http.post('api/article/update/'+id,data);
};

services.deleteArticle=(id)=>{
       return $http.get('api/articles/delete/'+id);
};

services.getArticle=(id)=>{
       return $http.get('/api/view/'+id);
};

services.postComment=(id,data)=>{
       return $http.post('/api/comments/'+id,data);
};

services.getComments=(id,data)=>{
       return $http.get('/api/comments/'+id);
};

return services;

});