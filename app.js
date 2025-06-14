const express =require('express');
const fs=require('fs');
const app=express();
const path=require('path');

const {homerouter}=require('./routers/homerouter');
const {bookingro}=require('./routers/booking');

app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');  // use for ejs

app.use((req,res,next)=>{
  // console.log(req.url,req.res);
  next();
})

app.use(express.urlencoded());

app.use(homerouter);
app.use(bookingro);

const PORT = 3012;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
