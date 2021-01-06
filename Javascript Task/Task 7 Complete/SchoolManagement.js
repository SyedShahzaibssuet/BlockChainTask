const { Console, log } = require('console');
var read =require('readline');
var takein = read.createInterface(process.stdin,process.stdout);
var stddataobj={
    Rollno:[1,2],
    Name:["Harris","Shahzaib"],
    Fname:["Maqbool","Anwer"],
    Age:[23,25],
    Stdclass:["B.A","B.C.S"]
}
var staffdata=[
    {id:1,Name:"Shah",Fname:"Nawaz",Sec:"A"},
    {id:2,Name:"Noman",Fname:"Rajput",Sec:"B"},
    {id:3,Name:"Faisal",Fname:"karamat",Sec:"C"}
]
var UserRecord=[
    {usid:1,UserName:"admin",password:"admin",isValid:true},
    {usid:2,UserName:"user",password:"user",isValid:true},
    {usid:3,UserName:"Haider",password:"123",isValid:false}
]
var FeesRecord =[
    {fid:1,Rollno:1,amount:2000,month:"Jan" },
    {fid:2,Rollno:2,amount:1500,month:"Jan" },
    {fid:3,Rollno:2,amount:1500,month:"feb" },
    {fid:4,Rollno:1,amount:2000,month:"feb" }
]
var Studentdatamp= new Map();


function Mainmenu() {
    console.log("\t\tSchool Management");
    console.log("\t\t*****************");
    console.log("***********************************");
    console.log("*\t 1. Student Menu *");
    console.log("*\t 2. Staff Menu   *");
    console.log("*\t 3. User Menu    *");
    console.log("*\t 4. Fees Menu    *");
    console.log("*\t 5. Search Menu  *");    
    console.log("*\t 6. Exit         *");
    console.log("***********************************\n");
    takein.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
        var test=parseInt(b);
        if(test==1)
        {
            Studentmenu();
        }
        else if(test==2)
        {
            Staffmenu();
        }
        else if(test==3)
        {
            Usermenu();
        }
        else if(test==4)
        {
            Feesmenu();
        }
        else if(test==5)
        {
            searchmenu();
        }
        else if(test==6)
        {
            takein.close();
        }        
        else
        {
            Mainmenu();
        }
    })
}
function Studentmenu() {
    menudesign("Student Menu","New Student      ","Update Student ","Delete Student","Exit                 ")
    menuentry(newStudentdata,Updatestudent,delstudent);    
}
function Staffmenu() {
    menudesign("Staff Menu","New Staff      ","Update Staff ","Delete Staff","Exit              ");
    menuentry(newStaff,UpdateStaff,delstaff);    
}
function Usermenu() {
    menudesign("User Menu","New User      ","Update User ","Delete User","Exit              ");
    menuentry(adduser,updateuser,deleteuser);   
}
function Feesmenu() {
    menudesign("Fees Menu","Fees New Entry ","Update Entry ","Delete Entry","Exit               ")
    menuentry(feenewentry,updatefee,deletefee);        
}
function searchmenu(){
    menudesign("Search Menu","Search Student","Search Staff","Search User","Search Fees Record")
    menuentry(Studentsearch,Staffsearch,Usersearch,Feessearch);    
}
function Recalling(a){
    takein.question("\nDo you want To Continue: y/n: ",(x)=>{
     if(x=="y")
    {
        a();
    }
     else if(x=="n")
    {
        takein.close();
    }
     else
    {
        Mainmenu();
    }
    })
}
function newStudentdata() {
    console.log("\n\n\t\t New Student Form");
    console.log("\t\t****************\n");
    takein.question("Enter Student Name: ",(stdname)=>{
        takein.question("Enter Father Name: ",(fname)=>{
            takein.question("Enter Student Age: ",(stdage)=>{
                takein.question("Enter Student Class Name: ",(stdclass)=>{
                    addstddt(stdname,fname,stdage,stdclass);
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                           stddataobj.Rollno[stddataobj.Rollno.length]=stddataobj.Rollno.length +1;
                           stddataobj.Name[stddataobj.Name.length]=Studentdatamp.get("Name");
                           stddataobj.Fname[stddataobj.Fname.length]=Studentdatamp.get("FName");
                           stddataobj.Age[stddataobj.Age.length]=Studentdatamp.get("Age");
                           stddataobj.Stdclass[stddataobj.Stdclass.length]=Studentdatamp.get("ClassName");
                           console.log("\n New Record is Added");
                           Recalling(Studentmenu);
                       }
                        else
                       {
                           Mainmenu();
                       }
                       })
                })
            })
        })
    })    
}
var addstddt=(stdnm,stfnam,stdag,stdclas)=>{
    Studentdatamp.set("Name",stdnm);
    Studentdatamp.set("FName",stfnam);
    Studentdatamp.set("Age",stdag);
    Studentdatamp.set("ClassName",stdclas);
}
function Updatestudent() {
    console.log("\n\n\t\tStudent Update Form");
    console.log("\t\t*******************\n");
    printingstdata();
    takein.question("Please Enter Number of Option Which you want to Update: ",(b)=>{
        var test=parseInt(b)-1;
        if(test<=stddataobj.Name.length){        
        takein.question("Enter Student Name: ",(stdname)=>{
            takein.question("Enter Father Name: ",(fname)=>{
                takein.question("Enter Student Age: ",(stdage)=>{
                    takein.question("Enter Student Class Name: ",(stdclass)=>{
                        addstddt(stdname,fname,stdage,stdclass);
                        takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                            if(x=="y")
                           {
                               stddataobj.Name[test]=Studentdatamp.get("Name");
                               stddataobj.Fname[test]=Studentdatamp.get("FName");
                               stddataobj.Age[test]=Studentdatamp.get("Age");
                               stddataobj.Stdclass[test]=Studentdatamp.get("ClassName");
                               console.log("\n Record is Updated");
                               Recalling(Studentmenu);
                           }
                            else
                           {
                               Mainmenu();
                           }
                           })
                    })
                })
            })
        })
        }
        else {
            console.log("\n\tPlease Enter Correct Roll No: \n");
            Updatestudent();
        }
    })
}
function delstudent() {
    console.log("\n\n\t\tStudent Delete Form");
    console.log("\t\t*******************\n");
    printingstdata();
    takein.question("Please Enter Number of Option Which you want to Delete: ",(d)=>{
        var test=parseInt(d)-1;
        if(test<=stddataobj.Name.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n: ",(x)=>{   
                if(x=="y")
                {   
                    delete stddataobj.Rollno[test];                
                    delete stddataobj.Name[test];
                    delete stddataobj.Fname[test];
                    delete stddataobj.Age[test];
                    delete stddataobj.Stdclass[test];
                    console.log(` Record is Deleted `);
                    Recalling(Studentmenu);
                }
                else if(x=="n")
                {
                    Studentmenu();
                }
                else
                {
                    Mainmenu();
                }
            })
        }
    })
} 
var printingstdata=()=>{
    console.log(`	ID Name FatherNameAge Class`)
    for(var i=0;i<stddataobj.Name.length;i++){
        var a =i+1;        
        console.log(`	${a} ${stddataobj.Name[i]} ${stddataobj.Fname[i]} ${stddataobj.Age[i]} ${stddataobj.Stdclass[i]}`);      
       
    }    
}
function newStaff() {
    console.log("\n\n\t\t New Staff Form");
    console.log("\t\t**************\n");
    takein.question("Enter Staff Name: ",(stfname)=>{
        takein.question("Enter Father Name: ",(stffname)=>{
            takein.question("Enter Staff Sec: ",(stfsec)=>{              
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                        var objstaff ={id:staffdata.length +1,Name:stfname,Fname:stffname,Sec:stfsec}
                        staffdata[staffdata.length]=objstaff;                             
                        console.log("\n New Record is Added");
                        Recalling(Staffmenu);
                       }
                        else
                       {
                           Mainmenu();
                       }
                    })
                })
            })
        })
   
}
var printingstaffdata=()=>{
    console.log(`     Id   Name   FatherName   Section`);
    var stfdat= staffdata.map(function(x){
        return console.log(`     ${x.id}     ${x.Name}   ${x.Fname}   ${x.Sec}`);
    })      
}
function  UpdateStaff() {
    console.log("\n\n\t\tStaff Update Form");
    console.log("\t\t*****************\n");
    printingstaffdata();
    takein.question("Please Enter Number of Option Which you want to Update: ",(c)=>{
        var test=parseInt(c)-1;
        if(test <= staffdata.length)
        {        
        takein.question("Enter Staff Name: ",(stfname)=>{
            takein.question("Enter Father Name: ",(stafname)=>{
                takein.question("Enter Section: ",(stfsec)=>{
                        takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                            if(x=="y")
                           {                               
                               staffdata[test].Name=stfname;
                               staffdata[test].Fname=stafname;
                               staffdata[test].Sec=stfsec;                               
                               console.log("\n Record is Updated");
                               Recalling(Staffmenu);
                           }
                            else
                           {
                               UpdateStaff();
                           }
                        })
                    })
                })
            })
       
        }
        else {
            console.log("\n\tPlease Enter Correct Id No: \n");
            UpdateStaff();
        }
    })
}
function delstaff() {
    console.log("\n\n\t\tStaff Delete Form");
    console.log("\t\t*****************\n");
    printingstaffdata();;
    takein.question("Please Enter Number of Option Which you want to Delete: ",(d)=>{
        var test=parseInt(d)-1;
        if(test<=staffdata.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n: ",(x)=>{   
                if(x=="y")
                {
                    delete staffdata[test];
                    console.log(`  Record is Deleted  `);
                    Recalling(Staffmenu);                    
                }
                else if(x=="n")
                {
                    Studentdata();
                }
                else
                {
                    Mainmenu();
                }
            })
        }
    })
} 
function adduser(){
    console.log("\n\n\t\t New User Form");
    console.log("\t\t*************\n");
    takein.question("Enter User Name: ",(usrname)=>{
        takein.question("Enter User Password: ",(passwrd)=>{
            takein.question("Please Inform User is Active or not (true/false) : ",(usrisvalid)=>{              
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                        var objusr ={usid:UserRecord.length + 1,UserName:usrname,password:passwrd,isValid:usrisvalid};
                        UserRecord[UserRecord.length]=objusr;                             
                        console.log("\n New Record is Added");
                        Recalling(Usermenu);
                       }
                        else
                       {
                           Mainmenu();
                       }
                    })
                })
            })
        })
}
function updateuser(){
    console.log("\n\n\t\tUser Update Form");
    console.log("\t\t****************\n");
    printuserdata();
    takein.question("Please Enter Number of Option Which you want to Update: ",(c)=>{
        var test=parseInt(c)-1;
        if(test<=UserRecord.length)
        {        
            takein.question("Enter User Name: ",(usrname)=>{
                takein.question("Enter User Password: ",(paswrd)=>{
                    takein.question("Please Inform User is Active or not (true/false) : ",(usrisvalid)=>{
                        takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                            if(x=="y")
                           {                               
                               UserRecord[test].UserName=usrname;
                               staffdata[test].password=paswrd;
                               staffdata[test].isValid=usrisvalid;                               
                               console.log("\n Record is Updated");
                               Recalling(Usermenu);
                           }
                            else
                           {
                               updateuser();
                           }
                        })
                    })
                })
            })
       
        }
        else {
            console.log("\n\tPlease Enter Correct Id No: \n");
            UpdateStaff();
        }
    })

}
function deleteuser(){
    console.log("\n\n\t\tUser Delete Form");
    console.log("\t\t****************\n");
    printuserdata();
    takein.question("Please Enter Number of Option Which you want to Delete: ",(d)=>{
        var test=parseInt(d)-1;
                if(test<=staffdata.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n: ",(x)=>{   
                if(x=="y")
                {
                    delete UserRecord[test];
                    console.log(`  Record is Deleted  `);
                    Recalling(Usermenu);                    
                }
                else if(x=="n")
                {
                    Userdata();
                }
                else
                {
                    Mainmenu();
                }
            })
        }
    })
}
function printuserdata(){
    console.log(`    UserId   UserName   Password  Status`);
    UserRecord.map((a)=>{
        return console.log(`    ${a.usid}   ${a.UserName}   ${a.password}  ${a.isValid}`);
    })
}
function Studentsearch() {
    takein.question("Please Enter Student Name : ",(stnm)=>{
        var li=stddataobj.Name.findIndex((x)=>{ return x==stnm.trim()})
        if(li!==undefined)
        {
            console.log(`\t    Roll No    Student Name    Father Name    Class    Age`);
            console.log(`\t  ${stddataobj.Rollno[li]}    ${stddataobj.Name[li]}    ${stddataobj.Fname[li]}    ${stddataobj.Stdclass[li]}    ${stddataobj.Age[li]}`);
            Recalling(searchmenu);
        }        
        else
        {
            console.log(`   Record Not Found`);
            searchmenu();
        }
    })
    
}
function Staffsearch(){
    takein.question("Please Enter Staff Name : ",(stfnm)=>{
        var stf=staffdata.find((z)=>{
            return z.Name.trim()==stfnm.trim();
        })
        if(stf!==undefined)
        {
            console.log(`  Id    Name   Father Name    Sec`)
            console.log(`  ${stf.id}    ${stf.Name}   ${stf.Fname}    ${stf.Sec}`);
            Recalling(searchmenu);
        }
        else
        {
            console.log(`   Record Not Found`);
            searchmenu();
        }
    })
}
function Usersearch(){
    takein.question("Please Enter User Name : ",(uname)=>{
        var u=UserRecord.find((z)=>{
            return z.UserName.trim()==uname.trim();
        })
        if(u!==undefined)
        {
            console.log(`  User Id    User Name   password    isValid`);
            console.log(`  ${u.usid}    ${u.UserName}   ${u.password}    ${u.isValid}`);
            Recalling(searchmenu);
        }
        else
        {
            console.log(`   Record Not Found`);
            searchmenu();
        }
    })
}
function Feessearch() {
    takein.question("Please Enter Fees id : ",(fid)=>{
        var f=FeesRecord.find((z)=>{
            return z.fid==fid;
        })
        if(f!==undefined)
        {
            a=f.Rollno -1;
            var stdn=(x)=>{ return stddataobj.Name[x]};
            var stnm=stdn(a);
            console.log(`  fid      Rollno    StudentName   Month    Amount`);
            console.log(`  ${f.fid}      ${f.Rollno}    ${stnm}   ${f.month}    ${f.amount}`);
            Recalling(searchmenu);
        }
        else
        {
            console.log(`   Record Not Found`);
            searchmenu();
        }
    })
}
function feenewentry() {
    console.log("\n\n\t\tFee Form");
    console.log("\t\t********\n");
    takein.question("Enter Roll No: ",(Rn)=>{
        takein.question("Enter Fee Month: ",(mnth)=>{
            takein.question("Enter Fee Amount : ",(amnt)=>{              
                    takein.question("\nConfirm : Do you want To Add Record: y/n: ",(x)=>{
                        if(x=="y")
                       {
                        var objfee ={fid:FeesRecord.length+1,Rollno:Rn,amount:amnt,month:mnth};
                        FeesRecord[FeesRecord.length]=objfee;                             
                        console.log("\n New Record is Added");
                        Recalling(Feesmenu);
                       }
                        else
                       {
                           Feesmenu();
                       }
                    })
                })
            })
        })
}
function updatefee() {
    Printfee();
    takein.question("Please Enter No. You want to Update: ",(z)=>{
        if(parseInt(z)<=FeesRecord.length)
        {
            takein.question("Enter Roll No: ",(Rn)=>{
                takein.question("Enter Fee Month: ",(mnth)=>{
                    takein.question("Enter Fee Amount : ",(amnt)=>{              
                            takein.question("\nConfirm : Do you want To Update Record: y/n: ",(x)=>{
                                if(x=="y")
                               {
                                var a = parseInt(z) - 1;
                                FeesRecord[a].Rollno=Rn;
                                FeesRecord[a].amount=amnt;
                                FeesRecord[a].month=mnth;                             
                                console.log("\n Record is Updated");
                                Recalling(Feesmenu);
                               }
                                else
                               {
                                   Feesmenu();
                               }
                            })
                        })
                    })
                })  
        }
        else
        {
            console.log(`Please Enter Correct No`);
            updatefee();
        }
    })    
}
function deletefee() {
    Printfee();    
    takein.question("Please Enter No. You want to Delete: ",(z)=>{
        if(parseInt(z)<=FeesRecord.length)
        {
            takein.question("\nConfirm : Do you want To Delete Record: y/n:",(q)=>{
                if(q=="y")
                {
                    var b=parseInt(z) - 1;
                    delete FeesRecord[b];
                    Recalling(Feesmenu);
                }
                else
                {
                    console.log(`Please Enter Correct No`);
                    deletefee();
                }
            })
        }   
    })
}
function Printfee() {
    console.log(`  FeeId  Rollno  Month  Amount`);
    var fee = FeesRecord.map((x)=>{
        return console.log(`  ${x.fid}       ${x.Rollno}     ${x.month}    ${x.amount}`);
    })
}
function entrypoint() {
    takein.question("Enter User Name:",(Usrname)=>{
        takein.question("Enter Password:",(paswrd)=>{
                var get=UserRecord.find((x)=>{
                    return x.UserName==Usrname && x.password==paswrd && x.isValid==true
                            })                            
                if(get!=undefined)
                {
                    Mainmenu();
                }
                else
                {
                 console.log(` Please Enter Correct User Name And Password`);
                 entrypoint();   
                }
                
        })
    })
}
function menudesign(a,b,c,d,e) {
    console.log("\n\n\t\t"+a);
    console.log("\t\t***********");
    console.log("*\t 1. "+b+"       *");
    console.log("*\t 2. "+c+"         *");
    console.log("*\t 3. "+d+"          *");
    console.log("*\t 4. "+e+"   *");
    console.log("*\t Press Any key To Back   *\n");
}
function menuentry(a,z,c,d=0) {
    takein.question("Please Enter Number of Option Which you want to Select: ",(b)=>{
        switch (parseInt(b)) {
            case 1:
                a();
                break;
            case 2:
                z();
                break;
            case 3:
                c();
                break;
            case 4:
                if(d==0)
                {
                    takein.close();
                }
                else
                {
                    d();
                }
                break;
            default:
                Mainmenu();
                break;
        }
    })
}
entrypoint();