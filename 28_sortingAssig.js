const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
console.log(`1. Reverse the array`);
const reverse =arrayRollNumbers.reverse();
console.log(reverse);

console.log(`2. Use the sort() method as it is without any custom sorting logic (Without passing any
    arguments) & notice the issue`);

    const sort =arrayRollNumbers.sort();
    console.log(sort);
console.log(`3. Sort the array in ascending order, by writing your custom logic`);
const newArray = arrayRollNumbers.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(newArray);
console.log(`4. Find the Greatest number from the array`);
console.log(newArray[newArray.length-1]);
console.log(`5. Find the smallest number from the array`);
console.log(newArray[0]);
console.log(`6. Remove duplicates from array ${newArray}`);

const setNum = new Set(newArray);
console.log(setNum);