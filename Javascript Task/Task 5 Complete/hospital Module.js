const { parse } = require('path');
var read = require('readline');
var takein = read.createInterface(process.stdin,process.stdout);
class Patient
{  
    constructor(ptname,ptfname,dat,tim,ptward,nic,ptills,drname,fieldsarray,barcde)
    {        
        this._ptname=ptname;
        this._fname=ptfname;
        this._dat=dat;
        this._tim=tim;
        this._ptward=ptward;
        this._nic=nic;
        this._ptills=ptills;
        this._drname=drname;
        this._fieldsarray=fieldsarray;
        this._barcode=barcde;
    }
    get Ptname(){ return this._ptname;}
    get Ptfname(){ return this._fname;}
    get Nic(){ return this._nic;}
    get dat(){ return this._dat;}
    get tim(){ return this._tim;}
    get ptward(){ return this._ptward;}
    get Ptills(){ return this._ptills;}
    get Ptdrname(){ return this._drname;}
    get fieldarr(){ return this._fieldsarray;}
    get barcod(){ return this._barcode;}    
}
class Drappointment extends Patient
{
    constructor(drapptim,drtimematch,fees,feeoption)
    {
        super();
        this._drappt =drapptim;
        this._drtimemtch=drtimematch;
        this._fees=fees
        this._feesopt=feeoption;
    }
    get drapt(){ return this._drappt }
    get drtime(){ return this._drtimemtch }
    get drfee(){ return this._fees}
    get drfeeoptn(){ return this._feesopt }    
}
class hospital extends Drappointment
{    
    mainmenu()
    {
        console.log(`\n\t******** Hospital Management *********`);
        console.log(`\t**************************************`);
        console.log(`\t1. Patient Entry`);
        console.log(`\t2. Patient Appointment`);
        console.log(`\t3. Exit`);
        console.log(`\t**************************************`);
        this.answer();
    }
    answer()
    {
        takein.question("Please Select Option You want to do: ",(x)=>{
            var inp = parseInt(x);
            switch (inp) {
                case 1:
                    this.patientdetail();
                    break;
                case 2:
                    this.appointmnt();
                    break;
                case 3:
                    takein.close();
                    break;
                default:
                    this.mainmenu();
                    break;
            }
        })
    }
    patientdetail()
    {
        takein.question("Please Enter Patient Name: ",(patntnm)=>{
            takein.question("Please Enter Patient Father/Husband Name: ",(patntfnm)=>{
                takein.question("Please Enter Patient N.I.C: ",(patntnic)=>{
                    takein.question("Please Enter Patient Ward: ",(patntwd)=>{
                        takein.question("Please Enter Patient Dr. Name: ",(ptdrnm)=>{
                            var ptillness=["Fever","B.P","Cough"]
                            ptillness.map((x,y)=>{ return console.log(`${y+1}   ${x}`)})
                            takein.question("Please Select Patient admit due to : ",(ptill)=>{
                                takein.question("Please Enter Patient Admit Time: ",()=>{
                                    takein.question("Please Enter Patient Admit Date: ",()=>{
                                        takein.question("Please Enter Patient Field: ",(ptfdar)=>{
                                            takein.question("Please Enter Patient barcode: ",(ptbrcd)=>{
                                                var n = parseInt(ptill)
                                                if(n <= ptillness.length)
                                                {
                                                var dte = new Date();
                                                var obj = new Patient(patntnm,patntfnm,dte.toDateString(),dte.toLocaleTimeString(),patntwd,patntnic,ptillness[n-1],ptdrnm,ptfdar,ptbrcd);
                                                console.log(`Record is Added\n`);                                                                                                
                                                this.allptdata(obj.dat,obj.tim,obj.Ptname,obj.Ptfname,obj.Nic,obj.ptward,obj.Ptdrname,obj.Ptills,obj.fieldarr,obj.barcod);
                                                this.mainmenu();
                                                }
                                                else
                                                {
                                                    this.patientdetail();
                                                }
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    } 
    appointmnt()
    {
        takein.question("Please Enter Doctor Appointment Time: ",(ptdrtm)=>{
            takein.question("Please Enter Doctor Fee: ",(drfe)=>{
                var drfeety=["Cash","Online","Card"]
                drfeety.forEach((val,ind)=>{ console.log(`${ind+1}.   ${val}`);})
                takein.question("Please Select Doctor Fee Type: ",(drftyp)=>{
                    var num = parseInt(drftyp);    
                    if(num <= drfeety.length)
                    {              
                        var dat = new Date();
                        var dt = dat.toDateString()+ " "+dat.toLocaleTimeString()
                        var obj = new Drappointment(dt,"Yes",drfe,drfeety[num-1]);
                        console.log(`\n Dr Appointment Record is Added\n\n`);
                        this.printdr(obj.drapt,obj.drfee,obj.drfeeoptn);
                        this.mainmenu();
                    }
                    else
                    {
                        this.appointmnt();
                    }   
                })
            })
        })
    }
    allptdata(dt,tm,pnm,pfnm,ni,wrd,drnm,pil,fdar,brc)
    {
        console.log(`\t\t******** Hospital Management *********`);
        console.log(`\t\t**************************************`);
        console.log(`******** Patient Details`);
        console.log(`************************`);
        console.log(`**** Date : ${dt}\tTime: ${tm}`);
        console.log(`**** Patient Name: ${pnm}\n**** Patient Father/Husband Name: ${pfnm}`);
        console.log(`**** Patient N.I.C: ${ni}\n**** Patient Ward: ${wrd}`);
        console.log(`**** Patient Dr Name: ${drnm}\n**** Disease: ${pil}`);
        console.log(`**** Dr. Field: ${fdar}\n**** Barcode: ${brc}`);        
    }
    printdr(a,b,c)
    {
        console.log(`******** Patient Appointment`);
        console.log(`****************************`);        
        console.log(`**** Dr Appointment TIme: ${a}`);
        console.log(`**** Dr Fees: ${b}`);
        console.log(`**** Dr Fee Option: ${c}`);
    }
}
var objhos = new hospital()
objhos.mainmenu();