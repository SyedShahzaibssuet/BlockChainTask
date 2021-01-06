var studentdata ={
    stdname:["Ali","haider","farhan","Faizan","Nasir"],
    stdrollno:[1,2,3,4,5],
    stddepart:["Computer swcience","Chemistry","Botany","Zoology","Arts"]
}
 var librarydata = {
     bookcode:[101,102,103,104,105],
     bookname:["Calculus","Humainities","Assembly language","DCl","BE"]
 }
  var bookborow =new Array(5);
   var update = function(){
       for (var i=0;i<5;i++){
           bookborow[i] =[studentdata.stdrollno[i],studentdata.stdname[i],studentdata.stddepart[i],librarydata.bookcode[i],librarydata.bookname[i]];
       }
   }
var viewdata=function() {
    console.log(`\t\tLibrary Management`);
    console.log(`\t\t******************`);
    var arraytest=[]
    for(var i=0;i<bookborow.length;i++){
        for(var j=0;j<bookborow[i].length;j++)
        {
            arraytest[j]=bookborow[i][j];
        }
        console.log(`\n\tRoll No : ${arraytest[0]}\tName: ${arraytest[1]}`);
        console.log(`\n\tDepartment : ${arraytest[2]}`);
        console.log(`\n\tBook Code : ${arraytest[3]}\tBook Name: ${arraytest[4]}`);
    }
}
update();
viewdata();