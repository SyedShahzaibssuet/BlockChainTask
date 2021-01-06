const { userInfo } = require('os');
var read =require('readline');
var takeinput=read.createInterface(process.stdin,process.stdout);
class Product
{
    constructor(nme,rs)
    {
        this.Name=nme;
        this.Rs=rs;
    }
    set name(val)
    {
        this.Name=val;
    }
    get name()
    {
        return this.Name;
    }
    set Rupees(val)
    {
        this.Rs=val;
    }
    get Rupees()
    {
        return this.Rs;
    }
}
var tea = new Product();
tea.name="Mix Tea";
tea.Rupees=25;
var coffe = new Product();
coffe.name="Capuchino";
coffe.Rupees=75;
var blackcoffee = new Product("Black Coffee",100);
var ck = new Product("Cake",30);
var bis = new Product("Biscuit",15);
var mngshk = new Product("Mango Shake",100);
var banshk = new Product("Banana Shake",75);
var proarray = [tea,coffe,blackcoffee,ck,bis,mngshk,banshk]
class Pos
{    constructor()
    {
        this.answer=[]
    }
    entry(e,a,b,c)
    {
        console.log(`******************************`);
        console.log(`*************${e}**************`);
        console.log(`******************************`);
        console.log(`*\t1. ${a}`);
        console.log(`*\t2. ${b}`);
        console.log(`*\t3. ${c}`);        
        console.log(`******************************`);        
    }        
    askingquest(a=this.shopping,b=this.product,c=this.userdetail)
    {
        takeinput.question("Please Select Any Option You Want To Do: ",(x)=>{
            switch (parseInt(x)) {
                case 1:
                    this.shopping();
                    break;            
                case 2:
                    this.Item();
                    break;
                case 3:
                    takeinput.close();
                    break;   
                default:

                    break;
            }
        })
    }
    shopping()
    {        
        console.log(`*******************************`);
        console.log(`*************Cafe**************`);
        console.log(`*******************************`);
        console.log(`S#   Item    Price`);        
        for (let i = 0; i < proarray.length; i++)
        {
            const element = proarray[i];
            console.log(`${i+1}.   ${element.Name}   ${element.Rs}`);
        }
        takeinput.question("Please Number of Item You want to buy: ",(itm)=>{
            if(parseInt(itm)<=proarray.length)
            {
                takeinput.question("Please Enter Quantity You Want To Buy: ",(qty)=>{
                    if(parseInt(qty)<=0)
                    {
                        takeinput.close();
                    }
                    else
                    {
                        var elem=proarray[parseInt(itm)-1]                                                
                        this.answer.push(...Array(parseInt(qty)).fill(elem));
                        this.recall();
                    }
                })
            }
        })        
    }
    recall()
    {
        takeinput.question("Do you want to buy more things y/n : ",(x)=>{
            if (x==="y")
            {
                this.shopping();    
            }
            else if(x==="n")
            {
                var totalRs=this.answer.map((x)=>{ return x.Rs})
                var totalamount=totalRs.reduce((x,y)=> {return x+y});
                this.printingbil(totalamount);
                takeinput.close();
            }
            else
            {
                this.recall();
            }
        })
    }
    printingbil(a)
    {
        console.log(`\n\tBill`)
        console.log(`\t@@@@`)
        console.log(`\nItem   Price`)
        this.answer.map((x)=>{
            return console.log(`${x.Name}   ${x.Rs}`)
        })
        console.log(` Total Amount : ${a}`)
    }
    Item()
    {
        this.entry("Product","Add Product","Update Product","Exit");
        takeinput.question("Please Enter What yo Want to do: ",(x)=>{
            switch (parseInt(x)) {
                case 1:
                    this.adproduct();
                    break;
                case 2:
                    this.updatepro();
                    break;
                case 3:
                    takeinput.close();
                    break;                
                default:
                    break;
            }
        })
    }
    adproduct()
    {
        takeinput.question("Please Enter Product Name: ",(prdnam)=>{
            takeinput.question("Please Enter Product Price: ",(prdpr)=>{
                var obj = new Product(prdnam,parseInt(prdpr));
                proarray.push(obj);
                console.log(`Product Detail Is Saved\n\n`);
                this.entry("POS","Cafe","Product","Exit");
                this.askingquest();
            })
        })
    }
    updatepro()
    {
        for (let i = 0; i < proarray.length; i++)
        {
            const element = proarray[i];
            console.log(`${i+1}.   ${element.Name}   ${element.Rs}`);
        }
        takeinput.question("Please Enter Product Number You want to Update",(x)=>{
            var nmbr=parseInt(x);
            if(nmbr<=proarray.length)
            {
                takeinput.question("Please Enter Product Name: ",(prdnam)=>{
                    takeinput.question("Please Enter Product Price: ",(prdpr)=>{
                        proarray[nmbr-1].Name=prdnam;
                        proarray[nmbr-1].Rs=parseInt(prdpr);
                        console.log(`Product Detail Is Updated\n\n`);
                        this.entry("POS","Cafe","Product","Exit");
                        this.askingquest();
                    })
                })
            }
        })
    }
}
var obj=new Pos();
obj.entry("POS","Cafe","Product","Exit");
obj.askingquest();