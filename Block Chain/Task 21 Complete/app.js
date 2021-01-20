const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const block = require('./block');
const blockchain = require('./blockchain');
const transaction=require('./transaction');
const Node = require('./Nodes');
let port =3600;

 process.argv.forEach((val,index,array)=>{
    console.log(array[2]); 
    port = array[2];
 })

 if(port == undefined)
 {
     port=3600;
 }

app.use(bodyparser.json());

let transactions=[]
let nodes = [];

let genysisblock = new block();
let blckchain = new blockchain(genysisblock);

app.get('/',(req,res)=>{
    res.send("Hello Form BlockChain");
})


app.get('/nodes',(req,res)=>{
    res.json(nodes);
})


app.post('/nodes/register',(req,res)=>{
    let nodelist = req.body.urls;
    nodelist.forEach((nodedictionary)=>{
        let node1 = new Node(nodedictionary['url'])
        nodes.push(node1);
    })
    res.json(nodes);
})

app.get('/mining',(req,res)=>{
    let blck = blckchain.Miningblocks(transactions);
    blckchain.addblock(blck);
    res.json(blck);
})
app.get('/blockchain',(req,res)=>{
    res.json(blckchain)
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