const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    var output = `<center><h1> This is Our Homepage</h1></center><br>`;
    output += `<a href="../home">Home</a><br>`;    
    output += `<a href="../Registration">Registration</a><br>`;
    output += `<a href="../about">About</a><br>`;
    output += `<a href="../contact">Contact</a><br>`;
    output += `<h1>We Provide Service Which You are Looking For</h1><br>`;
    output += `<h2>CCTV Service</h2><br>`;
    output += `<h2>PC Service</h2><br>`;
    output += `<h2>Technical Assistance</h2><br>`;
    res.send(output);
})

router.get('/:id',(req,res)=>{
    res.send(`<center><h1>you have Login with Id: ${req.params.id}</h1></center>`)
})

module.exports = router;