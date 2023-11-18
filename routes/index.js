var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

/********* all model handel *********/
router.get('/create',async function(req, res, next) {
  const userCreated=  await userModel.create({
    username:"bishal0444",
    name: "Bishal",
    age: 56
  })
  res.send(userCreated);
});

router.get('/allusers', async function(req, res, next) {
 let alluser =  await userModel.findOne();
 res.send(alluser);
});

router.get('/delete', async function(req, res, next) {
  let deleteduser =  await userModel.findOneAndDelete({
    name:"Bishal"
  })
  res.send(deleteduser);
 });

 ////**********//session//**********////////////

 router.get('/session',function(req,res){
  req.session.ban = true;
  res.render("index");
 });

 router.get('/checkban',function(req,res){
  if(req.session.ban == true){
    console.log(req.session);
    res.send("You are banned");
  }
  else{
    res.send("not banned");
  }
 })

 router.get('/removeban',function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("ban remove");
  })
 })


 //////******** cookie ********///////
router.get("/cookie",function(req,res){
  res.cookie("age",25);
  res.render("index");
});

router.get("/cookieread",function(req,res){
 console.log(req.cookies);
 res.send("check")
});

router.get("/cookiedelete",function(req,res){
  res.clearCookie("age");
  res.send("clear hogi");
 });

 


module.exports = router;
