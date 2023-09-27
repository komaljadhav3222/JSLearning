console.log(`=================== Arithmetic operator =================`);
var num1=10;
var num2 = 3;

var result = num1*num2;
console.log(`multiplication is ${result}`);

result = num1 ** num2;
console.log(`exponential is ${result}`);

var result = num1/num2;
console.log(`Division is ${result}`);

var result = num1%num2;
console.log(`Reminder is ${result}`);
console.log(`Reminder is ${10%2}`);
console.log(`Reminder is ${15%4}`);

// increment and decrement
console.log("====== Unary Operator =========");
var num1 = 10;
// var result = num1++; // var result = num1 + 1;
var result = ++num1;
console.log(`Result is: ${result}`);

var num2 = 10;
var result = --num2; //num2--; // num2-1;
console.log(`Result is of decrement is: ${result}`);

console.log("================== Assignment Operator ==============");
var num3=5;
var num4 = num3;
console.log(`value of num3 is : ${num3} value of num4 ${num4}`);

//compound addition

num3+= 6; //num3 = num3+6
console.log(`result of compound addition is : ${num3}` );

console.log("================== Comparison Operator ==============");
var str1 ='focus';
var str2='Focus';
var result = str1==str2;
console.log(typeof result);
console.log(`Result of comparison (==) is: ${result}`);

var num1=10;
var num2="10";
var result = num1===num2;
console.log(`Result of comparison with strictly equal (===) is: ${result}`);

var result = num1==num2;
console.log(`Result of comparison with comparison (==) is: ${result}`);

var num3=20;
var result = num1 != num3;
console.log(`Result of != is: ${result}`);

var num4=20;
var result = num1>num4;
console.log(`${num1} is greater than ${num4} ->  ${result}`);

var num4=20;
var result = num4>=num3;
console.log(`${num4} is greater than equal ${num3} ->  ${result}`);

var num4=20;
var result = num1<num4;
console.log(`${num1} is less than ${num4} ->  ${result}`);

var num4=20;
var result = num4<=num3;
console.log(`${num4} is less than equal ${num3} ->  ${result}`);