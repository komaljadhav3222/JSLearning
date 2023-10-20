const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
const greaterThanFifty = arrayNumbers.filter( (currentValue )=> {
    return currentValue > 50;
} );
console.log(`Number greater than 50 ${greaterThanFifty}`);

const evenArrayNum = arrayNumbers.filter( (currentValue )=> {
    return currentValue%2==0;
} );
console.log("Even number array",evenArrayNum);

const oddArrayNum = arrayNumbers.filter( (currentValue )=> {
    return currentValue%2!=0;
} );
console.log("Odd number array",oddArrayNum);

const multipleOfFive = arrayNumbers.filter( (currentValue )=> {
    return currentValue%5==0;
} );
console.log("Multiples of 5",multipleOfFive);

const between = arrayNumbers.filter( (currentValue )=> {
    return currentValue >= 20 && currentValue <= 50;
} );
console.log("Number between 20 and 50 ",between);

