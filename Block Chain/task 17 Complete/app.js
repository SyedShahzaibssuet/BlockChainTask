let Block = require('./Block');
let BlockChain = require('./BlockChain');
let Transaction = require('./Transaction');

let trans = new Transaction("Faisal","Zakwan",100);

let blck = new Block("This Is My Genysis Block");

blck.adddtranscation(trans);

let blckchain = new BlockChain(blck);

console.log(blckchain);