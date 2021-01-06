var add = function(a,b) {
    return a+b;
}
var sub = function(a,b) {
    return a-b;
}
var mul = function(a,b) {
    return a*b;
}
var div = function(a,b) {
    if(b!==0){
        return a/b;
    }
    else{
        return "Not Possible"
    }
}
var square = function(a) {
    return a*a;
}
var percentage = function(obtmarks,totmarks) {
    var perc = obtmarks/totmarks * 100
    return perc;
}
console.log(`Addition of 20 and 30 ${add(20,30)}`);
console.log(`Subtration of 30 and 20 ${sub(30,20)}`);
console.log(`Multiplication of 20 and 30 ${mul(20,30)}`);
console.log(`Division of 20 and 4 ${div(20,4)}`);
console.log(`Square of 6 ${square(6)}`);
console.log(`Percentage of 497 out of 600 ${percentage(497,600)}`);
