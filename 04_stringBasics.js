var strName="Hello";
console.log(typeof("strName"));

var greet ="Good morning";
console.log("================ length property==================");
console.log('Length of the string is - ' ,greet.length);
console.log("================ charAt() method==================");
console.log(greet.charAt(6));

var thirdLastIndexChar = greet.charAt(greet.length-3);
console.log('Third Last index char is: ', thirdLastIndexChar);

console.log("================ concat() method==================");
var greetEverybody = greet.concat(" Everybody");
console.log(greetEverybody);

console.log("================ indexOf method==================");
console.log('Index of o is - ',greet.indexOf('o'));
console.log('Index of nin is - ',greet.indexOf('nin'));

console.log("================ replace method==================");
var result= greet.replace("morning","Afternoon");
console.log(result);

console.log("Upper Case : " ,result.toUpperCase());
console.log("Lower Case : " ,result.toLowerCase());

var StringTrim = "    Good   Afternoon   ";
var lengthBTrim = StringTrim.length;
console.log(" length before trim : " ,lengthBTrim);
var result=StringTrim.trim();

console.log(" length After trim : " ,result.length);

console.log("================ search method==================");
var result=greet.search("ood");
console.log(result);

console.log("================ slice method==================");
var result=greet.slice(6);
console.log(result);
var result=greet.slice(6,10);
console.log(result);

console.log("================ split method==================");
var result=greet.split(" ");
console.log(result);
//to count total no. of words
var str="I am UI developer";
var words=str.split(" ");
console.log(words);  
console.log("Total words are : ",words.length);
console.log(`Total words are : ${words.length}`);
console.log(typeof words);
 
// String Template
console.log(`I am "UI" developer `);

var num1=10;
var num2 =20;
var result =num1+num2;
console.log("addition of ", num1, " and ",num2 , "is : ", result);
console.log(`addition of ${num1} and ${num2} is ${result}`);