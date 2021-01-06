let Block =require('./Block');
let BlockChain = require('./BlockChain');
let Transaction = require('./Transaction');


let genblock = new Block();
let blockchain1 = new BlockChain(genblock);

let firsttrans = new Transaction("Zakwan","Abid",200);
let firstblock =blockchain1.GetnxtBlck(firsttrans);

let Secondtrans = new Transaction("Abid","Farhan",150);
let Secondblock =blockchain1.GetnxtBlck(Secondtrans);

console.log(blockchain1);