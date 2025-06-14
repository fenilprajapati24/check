const express =require('express');
const app=express();
const path=require('path');

const homerouter=express.Router();

homerouter.get('/',(req,res,next)=>{

  console.log("home get",req.url,req.method);
  // res.send("<h2>hello student</h2>");
  res.render('home.ejs');

})

exports.homerouter=homerouter;