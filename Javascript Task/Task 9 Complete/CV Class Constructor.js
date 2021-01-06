class PersonalInfo
{
    constructor(name,fname,nic,address,age,matric,intermed,Bachelors,language,exper)
    {
        this.nm=name;
        this.fm=fname;
        this.nic=nic;
        this.add=address;
        this.ag=age;
        this.mt=matric;
        this.it=intermed;
        this.bc=Bachelors;
        this.lng=language;
        this.exp=exper;    
    }
    get pers()
    {
        return console.log(`\n\t\tCV\n\t\t**\nPersonal Info:\n\tName: ${this.nm}\n\tFather Name: ${this.fm}\n\tN.I.C: ${this.nic}\n\tAge: ${this.ag}\n\tAddress; ${this.add}`)
    }   
    get edu()
    {
        return console.log(`Educational:\n\tMatric:\n\t    ${this.mt}\n\tIntermediate:\n\t    ${this.it}\n\tBachelors:\n\t    ${this.bc}`);
    }
    get Skill()
    {
        return console.log(`Skills:\n\tProgramming:\n\t    ${this.lng}`);
    }
    get Exp()
    {
        return console.log(`Experience:\n\t    ${this.exp}`);
    }
    printcv()
    {
        this.pers;
        this.edu
        this.Skill
        this.Exp;
    }
}
var obj =new PersonalInfo("Syed Shahzaib","Syed Anwer Ali","42301-04682481-3","H-132/7 St-12-G Agra Taj Colony",20,"From Allam Iqbal Higher Secondary School with First Division","From S.M.I College Second Division","From karachi University","C,Java,Python,javaScript,Html","3-Month as works as internee on WinForms Application In C#");
obj.printcv();