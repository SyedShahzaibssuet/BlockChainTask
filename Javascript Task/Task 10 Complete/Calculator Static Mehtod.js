class Calculator
{
    static add(x,y)
    {
        return x+y;
    }
    static sub(x,y)
    {
        return x-y;
    }
    static div(x,y)
    {
        return x/y;
    }
    static mul(x,y)
    {
        return x*y;
    }
    static sqrt(x)
    {
        return Math.sqrt(x);
    }
    static square(x)
    {
        return x*x
    }
    static log(x)
    {
        return Math.log(x)
    }
    static hypo(x,y)
    {
        return Math.hypot(x,y)
    }
    static sine(x)
    {
        return Math.sin(x)
    }
}
console.log(`The Addition of 2 And 3 ${Calculator.add(2,3)}`);
console.log(`The Sum of 18 And 3 ${Calculator.sub(10,3)}`);
console.log(`The Multiplication of 2 And 3 ${Calculator.mul(2,3)}`);
console.log(`The Division of 18 And 3 ${Calculator.div(18,3)}`);
console.log(`The Square Root of 9 ${Calculator.sqrt(9)}`);
console.log(`The Square of 3 ${Calculator.square(3)}`)
console.log(`The log of 30 ${Calculator.log(30)}`)
console.log(`The hypotenous of 30 and 13 ${Calculator.hypo(30,13)}`)
console.log(`The Sine of 10 ${Calculator.sine(10)}`)
