const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const router=express.Router();
const path=require('path');
const database=require("./config/db");
const session = require('express-session');
const port=process.env.port || 9999;

//controller
var authController=require('./server/controller/authController');
var articleController=require('./server/controller/articleController');
var commentController=require('./server/controller/commentController');


//database configuration
mongoose.connect(database.localURL);

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));


//listen to server 3000
app.listen(port,()=>{
    console.log(app.get('port'));
});

app.post('/api/post',authController.signup);

app.post('/api/login',authController.login);

app.post('/api/articles/new',articleController.new);
app.get('/api/articles/all',articleController.getAll);
app.get('/api/articlesbyId/:id',articleController.getById);
app.post('/api/article/update/:id',articleController.updateArticle);

app.get('/api/articles/delete/:id',articleController.deleteArticle);
app.get('/api/view/:id',articleController.deleteArticle1);

app.post('/api/comments/:id',commentController.new);
app.get('/api/comments/:id',commentController.getComments);


