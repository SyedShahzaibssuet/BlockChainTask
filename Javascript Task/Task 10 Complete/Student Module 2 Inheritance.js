class Student
{
    constructor(name,Fname,agge,recntclass,lastclass,rollno)
    {
        this.nam=name;
        this.fnme=Fname;
        this.ag=agge;
        this.recentclass=recntclass;
        this.lastclas=lastclass;
        this.rolno=rollno;                
    }    
}
class Stdfee extends Student
{   
    set adfee(value)
    {
        this.addmifee=value;
    }
    set monthfee(value)
    {
        this.mnthfee=value;
    }
    set extracircular(value)
    {
        this.extracircularfee=value;
    }
    set gamefee(value)
    {
        this.gamefe=value;
    }
    printdata()
    {       
        console.log(`\n\t********Student Complete data*********\n`);
        console.log(`Student Personal Info:`);
        console.log(`\tRoll No: ${this.rolno}`);
        console.log(`\tStudent Name: ${this.nam} Father Name: ${this.fnme}`);
        console.log(`\tAge: ${this.ag} Class: ${this.recentclass}`);
        console.log(`\tLast Class: ${this.lastclas}`);
        console.log(`\nStudent Fee Detail:`);
        console.log(`\tAddmisiion Fee: ${this.addmifee}`);
        console.log(`\tMonthly Fee: ${this.mnthfee}`);
        console.log(`\tExtra Circular Fee: ${this.extracircularfee}`);
        console.log(`\tGame Fee: ${this.gamefe}`);
    }
}
var obj = new Stdfee("Shahzaib","Anwer",24,"BlockChain","AI",1);
obj.adfee=20000;
obj.monthfee=1500;
obj.extracircular=2000;
obj.gamefee=1000;
obj.printdata();