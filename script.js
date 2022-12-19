//Type conversion
// String to Number conversion
const inputNumber = "23456";
console.log(inputNumber);
console.log(inputNumber + 10);

console.log(Number(inputNumber));
console.log(Number(inputNumber) + 10);
console.log(typeof(inputNumber));
console.log( typeof(Number(inputNumber)));

//Number to String conversion

const brithYear = 2001;
console.log (brithYear);
console.log(typeof(brithYear));
console.log( String (brithYear) + 10 );
console.log( typeof String (brithYear));

// Simple text is not convert a number.

const myName = "Jatin";
console.log(myName);
console.log(Number (myName));
console.log( typeof Number (myName));

// Boolean conversion

const joinYear = 2001;
const nickName = "Jatin";
console.log(Boolean(joinYear));
console.log(Boolean(nickName));

// Javascript type coercion

let myBirthyear = 2001;
console.log( myBirthyear   +  " is My birthyear");
console.log("20" - 5);
console.log("20" + 5); // various type 20+5 =25 //205 for addition

console.log("20" / 5);
console.log("20" * 5);
console.log("20" % 5);

console.log(5+5+5+5+"5");
console.log("500" -200+100 - "100");
console.log("500" -"200" + "100");
console.log( "5" -"3" +"6"%"9"/"1");

//Javascript truthy and false value

// Five type false value
/*
1.0
2.Empty string
3.Null
4.Undefined
5,NaN
*/


// False value Zero(0)

let a=0;
console.log(Boolean(a));
a=.8;
console.log(Boolean(a));

// False value --Empty String ("")

a="";
console.log(Boolean(a));
a="Jatin";
console.log(Boolean(a));

// False value null

a= null;
console.log(Boolean(a));
a=67;
console.log(Boolean(a));

// False value  undefined

let b;
console.log(Boolean(b));
b=7;
console.log(Boolean(b));

// False value NaN

b=NaN;
console.log(Boolean(b));

let play=0;
if(play)
{
    console.log("playing football");
}else{
    console.log("Not playing football")
}
 
 play=1;
if(play)
{
    console.log("playing football");
}else{
    console.log("Not playing football")
}

let price;
if(price)
{
    console.log("Empty pocket");
}else{
 console.log("Buy a book");
}
 price = 200;
if(price)
{
    console.log("Empty pocket");
}else{
 console.log("Buy a book");
}

//Conditional statement

let earning = 40000;
if (earning>30000)
{
    console.log("His earning is good");
}
else
{
    ("His earning isn't good enough");
}


 let myAge=20;
 let myfdAge =21;
 if(myfdAge>myAge){
    console.log("He is elder");
 }
 else if(myfdAge >= myAge)
 {
    console.log("we are same age");
 }else{
    console.log("He is young");
 }

 let toDay = "Starday";
 if (toDay === "Starday")
 {
    console.log("Today main live class");

 }
 else if(toDay ==="Sunday" )
 {
    console.log("Today support live class");
 }
 else if(toDay ==="Monday" )
 {
    console.log("Today main live class");
 }
 else if(toDay ==="Tuseday" )
 {
    console.log("Today support live class");
 }
 else if(toDay ==="Wednesday" )
 {
    console.log("Today main live class");
 }
 else if(toDay ==="Thursday" )
 {
    console.log("Today support live class");
 }
 else{
    console.log("Today is holiday");
 }

 //Nested condition statement

 const  s =20;
 if(s>19)
 {
    if(s==19){
        console.log(s +" "+ "is equal than 19");
    }
    else{
        console.log(s +" "+ "is greater than 19");

    }
 }else{
    console.log(s +" "+ "is Smaller than 19");
 }

// Switch Statement

let day = "Starday";
switch(day){
    case  "Starday":
    console.log("Today main live class");
    break;
    case  "Sunday":
    console.log("Today support live class");
    break;
    case  "Monday":
    console.log("Today main live class");
    break;
    case  "Tuseday":
    console.log("Today support live class");
    break;
    case  "Wednesday":
    console.log("Today main live class");
    break;
    case  "Thursday":
    console.log("Today support live class");
    break;
    default:
    console.log("Today is holiday");
}
