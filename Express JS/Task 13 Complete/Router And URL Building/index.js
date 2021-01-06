const express = require('express');
const app = express();
const port =3000;

const registration = require('./Registration');
const home = require('./home');
const about = require('./about');
const contact = require('./Contactus');

app.use('/registration',registration);
app.use('/home',home);
app.use('/about',about);
app.use('/contact',contact);




app.get('*',(req,res)=>{
    res.send("Web Page Not Found")
})

app.listen(port,(req,res)=>{
    console.log(`Listening On Port :${port}`);
})