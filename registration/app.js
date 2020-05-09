const express=require('express');
const bodyparser=require('body-parser');
const app=express();
//app.use(bodyparser.urlencoded({extended:false}));
app.use('view engine','ejs');
app.use('views','views');
const myroutes=require('./router/page1.js');
app.use('/admin',myroutes);
app.listen(2222,console.log("connected"));
