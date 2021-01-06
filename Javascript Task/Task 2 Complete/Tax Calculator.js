var taxdeductper = function(Salary,TaxPercent){
    deduct=Salary*(TaxPercent/100);
    deductslary=Salary-deduct;
    console.log("\nSalary:"+Salary+"\nDeducion:"+deduct+"\nSalary After Deduction:"+deductslary);
}
var taxdeduct = function(Salary){
    if(Salary>=50000){
        taxdeductper(Salary,5);
    }
    else if(Salary>=100000){
        taxdeductper(Salary,7.5);
    }
    else if(Salary>=150000){
        taxdeductper(Salary,10);
    }
    else if(Salary>=200000){
        taxdeductper(Salary,12.5);
    }
    else 
    {
        console.log("\nYour are not Eligible for Income tax:"+Salary);
    }
}

taxdeductper(50000,20);
taxdeduct(55000);
taxdeduct(105000);
taxdeduct(155000);
taxdeduct(45000);