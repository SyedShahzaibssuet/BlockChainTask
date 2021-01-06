var read = require('readline');
var take = read.createInterface(process.stdin,process.stdout);
class Employee
{
    constructor(emid,emfulname,emfatname,emnic,emattend,emovrtmall)
    {
        this.empid=emid;
        this.empflnm=emfulname;
        this.empfname=emfatname;
        this.empnic=emnic;
        this.empattend=emattend;
        this.empovrtm=emovrtmall;
    }
}
class Salary extends Employee
{    
    set empfixsalary(val)
    {
        this._empfixsalary=val;
    }
    set empsalallow(val)
    {
        this._empsalallow=val;
    }
    set emptrolloingallow(val)
    {
        this._emptrolloingallow=val;
    }
    set empbonus(val)
    {
        this._empbonus=val;
    }
    set empbnprmnth(val)
    {
        this._empbnprmnth=val;
    }    
    set empallsal(val)
    {
        this._empallsal=val;
    }
    set empaftrrec(val)
    {
        this._empaftrrec=val;
    }

    get empfixsalary()
    {
        return this._empfixsalary;
    }
    get empsalallow()
    {
        return this._empsalallow;
    }
    get emptrolloingallow()
    {
        return this._emptrolloingallow;
    }
    get empbonus()
    {
        return this._empbonus;
    }
    get empbnprmnth()
    {
        return this._empbnprmnth;
    }    
    get empallsal()
    {
        return this._empallsal;
    }
    get empaftrrec()
    {
        return this._empaftrrec
    }    
}
var emplyrec=[];
class Takinginput
{
    userinterface()
    {
        console.log(`\n\n~~~~~~~~~~~~~~Employee Salary System~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`~\t1.Enter Employee Record                          ~`);
        console.log(`~\t2.View Employee Record                           ~`);
        console.log(`~\t3.Exit                                           ~`);
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
        take.question("Please Select Option: ",(x)=>{
            var opt = parseInt(x);
            if(opt===1)
            {
                this.askingquestion();
            }
            else if(opt===2)
            {
                this.printingresult();
            }
            else if(opt===3)
            {
                take.close();
            }
            else
            {
                this.userinterface();
            }
        })
    }
    askingquestion()
    {
        take.question("Please Enter Employee ID: ",(empid)=>{
           take.question("Please Enter Employee Name: ",(empname)=>{
                take.question("Please Enter Employee Father Name: ",(empfname)=>{
                    take.question("Please Enter Employee N.I.C: ",(empnic)=>{
                        take.question("Please Enter Employee Attendance: ",(empatnd)=>{
                            take.question("Please Enter Employee OverTime in Days: ",(emovr)=>{
                                var empobj=new Salary(empid,empname,empfname,empnic,empatnd,emovr);
                                take.question("Please Enter Employee Fix Salary: ",(empfxsl)=>{
                                    take.question("Please Enter Employee Salary Allowancce: ",(empsalaryalow)=>{
                                        take.question("Please Enter Employee Travelling Allowance: ",(emptravelallow)=>{
                                            take.question("Please Enter Employee Attendance Bonus: ",(empbonus)=>{
                                                take.question("Please Enter Employee Monthly Bonus: ",(empmnthbonus)=>{
                                                    take.question("Please Enter Employee Recived Salary: ",(emprecivedsal)=>{
                                                        empobj.empfixsalary=parseInt(empfxsl);
                                                        empobj.empsalallow=parseInt(empsalaryalow);
                                                        empobj.emptrolloingallow=parseInt(emptravelallow);
                                                        empobj.empbonus=parseInt(empbonus);
                                                        empobj.empbnprmnth=parseInt(empmnthbonus);                                                                                                                   
                                                        empobj.empaftrrec=emprecivedsal;                                                        
                                                        emplyrec.push(empobj);
                                                        console.log(`\n\n\t\tRecord Is saved`);
                                                        this.userinterface();
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
            })
        })
    }
    printingresult()
    {
        if(emplyrec.length===0)
        {
            console.log(`\n\n\t\tNo Record is found`);
            this.userinterface();
        }
        else
        {            
            this.printemploydata()
            this.userinterface();
        }
    }
    printemploydata()
    {
        var ln = emplyrec.length-1;
        var fixsal = emplyrec[ln]['_empfixsalary'];
        var salaryprday = Math.floor(fixsal /24);
        var incometax = fixsal > 40000 ? 2000 : 0;
        var salaryrecived = emplyrec[ln]['_empaftrrec'];
        var ovrtime = Math.floor( salaryprday * emplyrec[ln]['empovrtm']);
        var salrypermnt = Math.ceil(salaryprday * emplyrec[ln]['empattend']);
        var total= salrypermnt + emplyrec[ln]['_empsalallow'] + emplyrec[ln]['_emptrolloingallow'] + emplyrec[ln]['_empbonus'] + emplyrec[ln]['_empbnprmnth'] - incometax + ovrtime ;
        console.log(`\n\n\t---------Employee Detail--------`);
        console.log(`\t--------------------------------`);
        console.log(`-----Employee Personal Detail-----`);
        console.log(`\tEmployee ID: ${emplyrec[ln]['empid']}\n\tEmployee Name: ${emplyrec[ln]['empflnm']}`);
        console.log(`\tFather Name: ${emplyrec[ln]['empfname']}\n\tN.I.C : ${emplyrec[ln]['empnic']}`);
        console.log(`\tAttendance: ${emplyrec[ln]['empattend']}\n\tOver Time: ${emplyrec[ln]['empovrtm']}`);
        console.log(`\n\n-----Employee Salary Detail-----`);
        console.log(`\tFix Salary:${fixsal}\n\tRecent Basic: ${salrypermnt}\n\tSalary Allowance: ${emplyrec[ln]['_empsalallow']}`);
        console.log(`\tTravelling Allowance:${emplyrec[ln]['_emptrolloingallow']}\n\tAttendance Bonus: ${emplyrec[ln]['_empbonus']}`);
        console.log(`\tBonus per Month :${emplyrec[ln]['_empbnprmnth']}\n\ttax per Month: ${incometax}`);
        console.log(`\tOver time: ${ovrtime}\n\tTotal Salary :${total}\n\n\tSalary has been Recived By ${salaryrecived =="yes" ? emplyrec[ln]['empflnm']: "Not Recived"}`);                
    }
}
var obj = new Takinginput();
obj.userinterface();