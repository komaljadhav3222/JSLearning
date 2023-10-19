// Write a arrow functions such that - Pls don’t forget to log result on console with meaningful msg
// 1. With no args and no return value, log message on console inside arrow function
// a. “Good Morning, Today is Wednesday”
let arrowFunction = ()=>{
    console.log(`“Good Morning, Today is Thursday`);
};
arrowFunction();
// 2. With 3 args and no return value, for received 3 parameters perform the multiplication
// a. Values to be passed ⇒ 5, 5, 2
let multiplication = (num1,num2,num3)=>{
    console.log(`multiplication of  ${num1},${num2},${num3} is :-${num1*num2*num3}`);
};
multiplication(5,5,2);

// b. Invoke the same arrow function for values ⇒ 10, 4 [Note: assign default value to 3rd arg as 1 
let multiplicationWithDefault = (num1,num2,num3=1)=>{
    console.log(`multiplication of  ${num1},${num2},${num3} is :-${num1*num2*num3}`);
};
multiplicationWithDefault(10,4);
// 3. With 5 args and return value such as, for received params it should do the addition
// a. Values to be passed ⇒ 100, 100, 200, 349, 756
let addition = (num1,num2,num3,num4,num5)=>{
    console.log(`Addition of ${num1},${num2},${num3},${num4},${num5} is :-${num1+num2+num3+num4+num5}`);
};
addition(100, 100, 200, 349, 756);
// b. Log the returned result on console with meaningful message for both step 3.a and 3.c
// c. Invoke the same arrow function for values: “I am ”, “ learning ”, “ ES6 ”, ‘ features ’, “ in depth”
addition("I am" , " learning ","  ES6 ", " features ", " in depth");