// function for printing name
function prname(whichname,fname,lname){
    console.log(whichname + fname + lname);
}
// function for heading value
function pranything(head1,testvalue){
    console.log(head1 +" "+ testvalue);
}
// function for personal information
function persinfo(){
    console.log("Personal Inforamtion:")
    prname("\tStudent Name: ", "\tSyed ","Shahzaib");
    prname("\tFahter Name: ", "\tSyed ","Anwar Ali");
    pranything("\tD.O.B: ","\t08-11-1994");
    pranything("\tN.I.C: ","\t42301-4682481-3");
}
// function for Qaulification
function qualification(){
    pranything("\tQualification:","\tBCS From karachi University");
}
// function for Skills
function Skills(){
    pranything("Skills: \n", "\tHTMl,\n\tCSS,\n\tJavascript,\n\tC,\n\tC++,\n\tC-#,\n\tpython");
}       
// function for experience
function Experience(){
    pranything("Experience:\n ","\tPrivately work on Small Project");
}
console.log("\t\t\tCV");
console.log("\t\t\t**");
pranything("Objective:\n","\tI want to serve you with my best effort.\n");
persinfo();
console.log("Educational Information:");
qualification();
Experience();
Skills();







