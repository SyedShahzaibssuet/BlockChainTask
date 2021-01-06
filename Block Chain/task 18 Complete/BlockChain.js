let jssha256 = require('js-sha256');
let BlockClass = require('./Block');
class BlockChain
{
    constructor(blck)
    {
        this.blocks =[];
        this.addblock(blck);
    }
    addblock(block)
    {
        if(this.blocks.length==0)
        {
            block.previoushash="000000";
            block.hash = this.genhash(block);
        }
        this.blocks.push(block);
    }
    genhash(blocks)
    {
        let hash = jssha256(blocks.key);
        while (!hash.startsWith('000')) {
            blocks.nonce += 1;
            hash = jssha256(blocks.key);
            // console.log(hash);
        }
        return hash;
    }
    GetnxtBlck(trans)
    {
        let previousblock = this.getpreviousblock();
        let block = new BlockClass();
        block.addtrans(trans);        
        block.index=this.blocks.length;
        block.previoushash = previousblock.hash;
        block.hash = this.genhash(block);
        this.blocks.push(block);        
        return block;
    }
    getpreviousblock()
    {
        let ind = this.blocks.length - 1;
        return this.blocks[ind];
    }
}

module.exports = BlockChain;