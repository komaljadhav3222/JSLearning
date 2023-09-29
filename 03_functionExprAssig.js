//Write a function Expression to get square of the number Ex → 5, 6, 25, 100, 67.89, 59

var square = function (value) {
  console.log(`Square of ${value} is ${value * value}`);
};
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

//Check and log type of function (Hint → typeof variableName )
var type = function () {
  console.log(` Type of function is :- ${typeof type}`);
};
type();
//Write a FE to get the area of rectangle plot [ length = 499 and width = 917 ]
var rectangleArea = function (length, width) {
  return length * width;
};
var result = rectangleArea(499, 917);
console.log(`Area of rectangle ${result}`);

//Write A FE with two args and should swap the passed values and log on console before swap and after swap
// values inside function itself.
// a. Variable name that you can use to store function as value: swapValues
// b. Invoke or call the function with values “Mahi” and “Raina”;
// c. Invoke or call the same function with values 55 and 77;

var swapValues = function (valueOne, valueTwo) {
  // function declaration

  console.log("Before swap ==>", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log("After swap ==>", valueOne, valueTwo);
};
swapValues("Mahi", "Raina");
swapValues(55, 77);

/* Write a FE which can perform the below steps for string “JS the most popular language of internet”
A. Find the total character available in the string
B. Find the character at index 6
C. Find the character at index 11
D. Find the last character using length property.
E. Find the very first character from the given string
F. Find the third last character from the given string
G. Find the total number words of the given string and then calculate the square of it and log it. */

var stringOperation = function (givenStr) {
  console.log(`1. Given String is - ${givenStr}`);
  var strLength = givenStr.length;
  console.log(`2. Length of the string is - ${strLength}`);
  var result = givenStr.charAt(6);
  console.log(`character at index 6 in the string  is "${result}"`);

  var result = givenStr.charAt(11);
  console.log(`character at index 11 in the string "${result}"`);

  var result = givenStr.charAt(strLength - 1);
  console.log(`last character in the string "${result}"`);

  var charAt0 = givenStr.charAt(0);
  console.log(
    `character at index 0 (OR very first character) in the string "${charAt0}"`
  );

  var charAtLastThree = givenStr.charAt(strLength - 3);
  console.log(` third last character in the string "${charAtLastThree}"`);

  var TotalNoOfWords = givenStr.split(" ");
  var lengthOfWords = TotalNoOfWords.length;
  console.log(
    `total number words of the given string "${lengthOfWords}" and square of it is :- ${
      lengthOfWords * lengthOfWords
    }`
  );
};
stringOperation("JS the most popular language of internet");
