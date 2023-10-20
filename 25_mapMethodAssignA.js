const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array is -${arrayNumbers}`);
const addTen=arrayNumbers.map((currentValue)=>{
    return currentValue+10;
});
console.log(`Add 10 in each element - ${addTen}`);

const cube=arrayNumbers.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
});
console.log(`Cube of element- ${cube}`);

const addIndex=arrayNumbers.map((currentValue,index)=>{
    return currentValue+index;
});
console.log(`Add index in each element - ${addIndex}`);