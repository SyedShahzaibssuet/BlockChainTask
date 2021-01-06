var read= require('readline');
var tkin=read.createInterface(process.stdin,process.stdout);
class Studentdetail
{
    set Stname(value)
    {
        this.stnm=value
    }
    get stname()
    {
        return this.stnm
    }
    set Ftname(value)
    {
        this.stfnm=value
    }
    get ftname()
    {
        return this.stfnm
    }
    set Stclas(value)
    {
        this.stcl=value
    }
    get stclas()
    {
        return this.stcl
    }
    set Stlacla(value)
    {
        this.stlcl=value
    }
    get stlacla()
    {
        return this.stlcl
    }
    set Stroll(value)
    {
        this.strol=value
    }
    get stroll()
    {
        return this.strol
    }   
    prntdetail()
    {
        var objstddt= new Studentdetail();
        console.log(`\n\t\t\t\tStudent Personal Info`);
        console.log(`\t\tRoll No: ${this.strol}`);
        console.log(`\t\tStudent Name: ${this.stnm}\n\t\tFather Name: ${this.stfnm}`);
        console.log(`\t\tStudent Class: ${this.stcl}\t\tStudent Last Class: ${this.stlcl}\n`);
    }   
}
class Stdfeedetail
{
    set Adfee(value)
    {
        this.addfee=value
    }
    get adfee()
    {
        return this.addfee
    }
    set Mtfee(value)
    {
        this.mthfee=value
    }
    get ntfee()
    {
        return this.mthfee
    }
    set Extcirfee(value)
    {
        this.extcifee=value
    }
    get extcirfee(){
        return this.extcifee
    }
    set Gamfee(value)
    {
        this.gmfee=value
    }
    get gamfe()
    {
        return this.gmfee
    }    
}
class Instdata
{
    inststdetail()
    {
        tkin.question("Enter Student Name: ",(stn)=>{
            tkin.question("Enter Student Father Name: ",(stf)=>{
                tkin.question("Enter Student Class: ",(stcla)=>{
                    tkin.question("Enter Student Last Class: ",(stlcla)=>{
                        tkin.question("Enter Student Roll No: ",(rollno)=>{
                            var objstddt= new Studentdetail();
                            objstddt.Stname=stn;
                            objstddt.Ftname=stf;
                            objstddt.Stclas=stcla;
                            objstddt.Stlacla=stlcla;
                            objstddt.Stroll=rollno;
                            tkin.question("Do you want Add Student Data: ",(x)=>{
                                switch (x) {
                                    case "y":
                                        objstddt.prntdetail(); 
                                        var ab= new abc();
                                        ab.ac();
                                       // this.inststfeedetail();                                     
                                        break;                                
                                    default:
                                        tkin.close();
                                        break;
                                }
                            })
                        })
                    })
                })
            })
        })
    }
    inststfeedetail()
    {
        tkin.question("Enter Student Addmission Fee: ",(stadfee)=>{
            tkin.question("Enter Student Monthly Fee: ",(stmfee)=>{
                tkin.question("Enter Student Extra Circular Fee: ",(stecfee)=>{
                    tkin.question("Enter Student Game Fee: ",(stgfee)=>{
                        var objstfeeddt= new Stdfeedetail();
                        objstfeeddt.Adfee=stadfee;
                        objstfeeddt.Mtfee=stmfee;
                        objstfeeddt.Extcirfee=stecfee;
                        objstfeeddt.Gamfee=stgfee;
                        tkin.question("Do you want Add Student Fee: ",(x)=>{
                            switch (x) {
                                case "y":
                                    console.log(`\n\t\t\t\tStudent Fee Detail`);        
                                    console.log(`\t\tAddmission Fee: ${objstfeeddt.adfee}\n\t\tMonthly Fee: ${objstfeeddt.ntfee}`);
                                    console.log(`\t\tExtra Circular Fee: ${objstfeeddt.extcirfee}\t\tGame Fee: ${objstfeeddt.gamfe}`);
                                    tkin.close();
                                    break;                            
                                default:
                                    tkin.close();
                                    break;
                            }
                            
                        })
                    })
                })
            })
        })
    }
}
class abc
{
    const ac=()=>{
        var obj = new Studentdetail(); 
        console.log(obj.ftname);
    }

}
var objinst = new Instdata();
objinst.inststdetail();