class Block
{
    constructor()
    {
        this.index=0;
        this.previoushash="000000000";
        this.hash='';
        this.nonce=0;
        this.transaction=[]
    }
    get key()
    {
        return JSON.stringify(this.transaction) + this.index + this.previoushash + this.nonce;
    }
    addtrans(trans)
    {
        this.transaction.push(trans);
    }
}


module.exports = Block;