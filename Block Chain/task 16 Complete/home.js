var express = require('express');
const Home = require('./Model/SaleEntry.js');
var Router = express.Router();


Router.post('/', function(req,res) {
    var tstdt = req.body;
    console.log(tstdt);
    if(!tstdt.name) {
        res.render('show_message', {
            message: "Sorry Invalid Data", type: "error"});
    }
    else 
    {     
        var std = new Home ({
            Cname:req.body.name,
            CDate:req.body.date,
            Phone:req.body.phone,
            Address:req.body.Address,
            Items:[{
                Itmname:req.body.itmname,
                itmqty:req.body.itmqty,
                Itmpr:req.body.price
            }],
            Account:[
                {
                Total:req.body.Total,
                Disc:req.body.disc,
                AftrDis:req.body.aftrdic
                }
            ]
        });
        std.save(function(err,result) {
            if (err)
            {
                console.log("Data is insert due to some error");
            }
            else
            {
                console.log("Data is Successfully Stored in Database");
            }
        });
    }
})

Router.get('/', function(req,res) {
    Home.find(function(err,resp) {
        res.json(resp);
    });
})


module.exports = Router;