const express=require('express');
const app=express();
const router=express.Router();
const path=require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


//listen to server 3000
const server=app.listen(3000,()=>{
    console.log(server.address().port);
});

//when opening localhost:3000
app.get('/',(req,res)=>{
  res.send("Basic Project Setup");
});

//to open localhost:3000/api
app.use('/api',router);

var create=router.route('/create');


//create api
create.get((req,res,next)=>{
 
 res.json({'mesg':'Create Api'});
 
});







