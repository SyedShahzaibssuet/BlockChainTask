const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    var output = `<center><h1> This is Our About</h1></center>`;
    output += `<a href="../home">Home</a><br>`;
    output += `<a href="../Registration">Registration</a><br>`;
    output += `<a href="../about">About</a>`;
    output += `<a href="../contact">Contact Us</a><br>`;
    res.send(output);
})
router.get('/:name/:id',(req,res)=>{
    res.send(`<center><h1>Your Profile Name Is ${req.params.name}  and ID is :${req.params.id}</h1></center>`)
})


module.exports = router;