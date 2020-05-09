const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const router=express.Router();
app.use(bodyparser.urlencoded({extended:false}));
app.use('view engine','ejs');
app.use('views','views');
router.get('/admin',(req,res)=>{
    res.render('register',{page:'mylogin'});
});
module.exports=router;