let Block = require('./block');
let sha256 = require('js-sha256');

class BlockChain
{
    constructor(genysisblock)
    {
        this.blocks=[];
        this.addblock(genysisblock);
    }
    addblock(block)
    {
        if(this.blocks.length==0)
        {
            block.previoushash="000000000000";
            block.hash=this.generatehash(block);
        }
        this.blocks.push(block);
    }
    generatehash(block)
    {
        let hash = sha256(block.key);
        while (!hash.startsWith('000'))
        {
            block.nonce +=1;
            hash = sha256(block.key);
            console.log(hash);    
        }
        return hash;
    }
    Miningblocks(transact)
    {
        let block = new Block();
        transact.forEach(transaction => {
            block.addtransaction(transaction);
        })
        let prblock = this.blocks[this.blocks.length -1];
        block.index =this.blocks.length;
        block.previoushash=prblock.hash;
        block.hash=this.generatehash(block);
        return block;
    }
}
module.exports=BlockChain;