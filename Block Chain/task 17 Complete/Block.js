class block
{
    constructor(mess)
    {
        this.index =0;
        this.previoushash="";
        this.message=mess;
        this. hash ="";
        this.nonce=0;
        this.transcaction=[];
    }
    get key()
    {
        return JSON.stringify(this.transcaction) + this.index + this.previoushash + this.nonce;
    }

    adddtranscation(transcation)
    {
        this.transcaction.push(transcation);
    }
}

module.exports = block;