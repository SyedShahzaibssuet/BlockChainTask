const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    var output = `<center><h1> This is Our Registration Page</h1></center>`;
    output += `<a href="../home">Home</a>`;
    output += `<a href="../Registration">Registration</a>`;
    output += `<a href="../about">About</a>`;
    output += `<a href="../contact">Contact</a>`;
    output +=`<br><br><center><h1>Registration</h1></center>` 
    output +=`<br><br>Name: <input type="text" value="" placeholder="Enter Name"/>`
    output +=`<br><br> Department: <input type="text" value="" placeholder="Enter Department"/>`
    output +=`<br><br> Email: <input type="text" value="" placeholder="Enter Email"/>`
    output +=`<br><br> Password: <input type="password" value="" placeholder="Enter Password"/>`
    output +=`<br><br> <input type="button" value="Save" /> <input type="button" value="Exit" />`
    res.send(output);
})

router.get('/:id([0-5]{1})',(req,res)=>{
    const name =["Shahzaib","Faisal","Ali","Qaiser","Irfan","Raza"]
    req.name =name[req.params.id];
    res.send(`<center><h1>Your Login Profile Name Is ${req.name}  and ID is :${req.params.id}</h1></center>`)
})

module.exports = router;