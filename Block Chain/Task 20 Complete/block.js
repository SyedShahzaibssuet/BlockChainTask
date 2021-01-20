class block
{
    constructor()
    {
        this.index=0;
        this.nonce=0;
        this.previoushash="";
        this.hash="";
        this.transactions=[]
    }
    get key()
    {
        return JSON.stringify(this.transactions) + this.nonce + this.previoushash + this.index;
    }
    addtransaction(transaction)
    {
        this.transactions.push(transaction);
    }
}
module.exports = block;