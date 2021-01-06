let sha25= require('js-sha256');
class BlockChain
{
 constructor(genblock)
 {
 this.blocks = [];
 this.addblock(genblock);
 }
 addblock(blck)
{
if(this.blocks.length==0)
{
blck.previoushash= "00000000";
blck.hash= this.genhash(blck);
}
this.blocks.push(blck);
}
genhash(blk)
{
let hash = sha25(blk.key)
return hash;
}
}
module.exports = BlockChain;