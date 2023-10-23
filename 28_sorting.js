
const frdNames = ['Jenny', "Bill", 'Stew', "Elon"];
const sortedArray = frdNames.sort();
console.log(sortedArray);

const descendingArray=sortedArray.reverse();
console.log(descendingArray);

const array =  [2, 5, 3, 2, 7, 11];
const reverse=array.reverse();
console.log(reverse);

const arrayNum=[111,52,47,8,12,54,24,29,85];
const sortedNum = arrayNum.sort();//consider number as string and sort it using first letter
console.log(sortedNum);

//custom logic to sort number array
console.log('======= Sorting an array of number ================');
const arrayNumber =  [29, 15, 31, 111, 27, 6];
// Sorting an array in ascending order
const newArray = arrayNumber.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(newArray);
console.log('======= Last element from array================');
console.log(newArray[newArray.length-1]);

//descending order
console.log('======= Sorting an array of number descending order================');
const reverseArray=newArray.reverse();
console.log(reverseArray);