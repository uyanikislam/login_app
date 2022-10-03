var express=require("express");
var router=express.Router();

const credential={
    email: "admin@gmail.com",
    password:"admin"
}

router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password ==credential.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');
        // res.end("its ok")
    }else{
        res.end("Username Problem Bro :)")
    }
})

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("this kişi is sıkıntı bro")
    }
})

router.get('/logout',(req,res)=>{
  req.session.destroy(function(err){
    if(err){
    console.log(err);
    res.send("Error")
    }else{
        res.render('temel',{title:"Express", logout: "Logout ok"})
    }
  })
})
module.exports=router;