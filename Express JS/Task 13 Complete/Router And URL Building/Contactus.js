const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    var output = `<center><h1> This is Our Contact</h1></center>`;
    output += `<a href="../home">Home</a><br>`;    
    output += `<a href="../Registration">Registration</a><br>`;
    output += `<a href="../about">About</a><br>`;
    output += `<a href="../contact">Contact</a><br>`;
    output += `<h1>Contact Us Through</h1>`;
    output += `<p> Mobile : 0321-3232321</p>`;
    output += `<p> Email : abc@tech.com</p>`;
    output += `<p> Visit Our Office : Suite # 13, Second floor Abc Plaza</p>`;
    output += `<p> Shahrah-e-faisal </p>`;
    output += `<p> Karachi</p>`;
    res.send(output);
})

module.exports = router;