function StudentData(Name,fname,classname,lastclass,lastpassingMarks,Rollno){
    this.Name=Name;
    this.fname=fname;
    this.lastclass=lastclass;
    this.classname=classname;
    this.lastpassingMarks=lastpassingMarks;
    this.Rollno=Rollno;
    
    this.usingarrow=function (){
        setTimeout(()=>{
            console.log("\t\tSchool Management System");
            console.log("\t\t************************");
            console.log("\tRoll No:"+this.Rollno+"\n\tStudent Name: "+this.Name +"\t"+"Father Name: "+ this.fname+"\n\tClass Name: "+this.classname+"\t\t\tLast Class: "+this.lastclass+"\n\tLast Passing Marks: "+this.lastpassingMarks);
        },2000);
    }
}
function Feesrecord(Admissionfess,Monthlyfess,Extracirculumfess,gamefess){
    this.Admissionfess=Admissionfess;
    this.Monthlyfess=Monthlyfess;
    this.Extracirculumfess=Extracirculumfess;
    this.gamefess=gamefess;
    this.usingarrowfees=function (){
        setTimeout(()=>{
            console.log("\n\t\tFees Section");
            console.log("\n\t\t************");
            console.log("\n\tAdmission Fess:"+this.Admissionfess+"\n\t"+"Monthly Fess:"+this.Monthlyfess+"\n\t"+"Extra Circular Fess:"+this.Extracirculumfess +"\n\tGame Fess:"+this.gamefess+"\n");
        },2000);
    }
}
function Stdmarks(English,Math,Urdu,Islamiat){
    this.English=English;
    this.Math=Math;
    this.Urdu=Urdu;
    this.Islamiat=Islamiat;
    const testmarks=(x)=> x>40? "Pass":"Fail";
    this.usingarrowmarks=function (){
        setTimeout(()=>{
            console.log("\n\t\tMark Sheet");
            console.log("\n\t\t**********");
            console.log("\n\tEnglish Marks:\t"+testmarks(this.English)+"\n\t"+"|Math Marks:\t"+testmarks(this.Math)+"\n\t"+"Urdu Marks:\t"+testmarks(this.Urdu)+"\n\t" +"Islamiat Marks: "+testmarks(this.Islamiat)+"|");
        },2000);
    }
}
var objstd=new StudentData("Syed Shahzaib","Syed Anwer Ali","BCS","Inter",2100,1379043);
objstd.usingarrow();
var objfess = new Feesrecord(2000,1500,2000,3000);
objfess.usingarrowfees();
var objStdmarks = new Stdmarks(50,60,70,45);
objStdmarks.usingarrowmarks();