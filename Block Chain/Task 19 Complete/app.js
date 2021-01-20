const express = require('express');
const app = express();

const transaction=require('./transaction');

const bodyparser = require('body-parser');
let port =3600;

app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send("Hello Form BlockChain");
})

app.post('/transaction',(req,res)=>{
    let from = req.body.from;
    let to = req.body.to;
    let amount = req.body.amount;
    let transaction1 = new transaction(from,to,amount);
    transactions.push(transaction1);
    res.json(transactions);
})

app.listen(port,()=>{
    console.log(`server has been started ${port}`);
})