var mongoose = require('mongoose');

var EnterRecord =  mongoose.Schema({
    Cname:String,
    CDate:Date,
    Phone:Number,
    Address:String,
    Items:[{
        Itmname:String,
        itmqty:Number,
        Itmpr:Number
    }],
    Account:[
        {
            Total:Number,
            Disc:Number,
            AftrDis:Number
        }
    ]
})

console.log("Schema Found");
module.exports = mongoose.model("Home",EnterRecord);