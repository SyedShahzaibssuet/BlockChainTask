function prname(whichname,fname,lname){
    console.log(whichname + fname + lname);
}
function pranything(head1,testvalue){
    console.log(head1 +" "+ testvalue);
}
function persinfo(){
    
    console.log("Personal Inforamtion:");
    console.log("\t*********************************************")
    prname("\t|Student Name: ", "\tSyed ","Shahzaib\t\t     |");
    prname("\t|Fahter Name: ", "\tSyed ","Anwar Ali\t\t     |");
    pranything("\t|D.O.B: ","\t08-11-1994\t\t     |");
    pranything("\t|Department: ","\tComputer Science \t     |");
}
function Marks(){
    console.log("\t*********************************************")
    prname("\t|Subject","\t| Obtain Marks","\t| Total Marks|");
    prname("\t|English","\t|70","\t\t| 100        |");
    prname("\t|Urdu","\t\t|75","\t\t| 100        |");
    prname("\t|Math","\t\t|90","\t\t| 100        |");
    console.log("\t*********************************************")
    prname("\t|Total","\t\t|235","\t\t| 300        |");
    var sum =Math.round((235/300*100),2);
    pranything("\t|Percentage :   |",sum );
    console.log("\t*********************************************")
}
console.log("\t\t  MarkSheet");
console.log("\t\t  *********");
persinfo();
Marks();