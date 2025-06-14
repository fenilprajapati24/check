const express =require('express');
const app=express();
const path=require('path');
const fs =require('fs');

const bookingro =express.Router();

bookingro.get('/booking',(req,res,next)=>{

  console.log("booking get",req.url,req.res);
  res.render('bookingpage.ejs');
    // res.send("<h2>hello student</h2>");

  
})

 const registeredhome=[];

bookingro.post('/booking-data',(req,res,next)=>{
  console.log("post of booking ");
  console.log("name is :",req.body.name,req.body.age,req.body.price);
  registeredhome.length=0;
  registeredhome.push(req.body);
  fs.appendFileSync('user.txt',JSON.stringify(registeredhome));
  res.render('finaldata.ejs',{registeredhome:registeredhome});
  // res.send("<h2>your data has been submited.</h2>")
})
exports.bookingro=bookingro;
exports.registeredhome=registeredhome;