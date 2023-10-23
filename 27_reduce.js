const array =  [2, 5, 3, 2, 7, 11];
const sum = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(sum);

//second argumnet considered as running total value i.e at the start sum=100;
const array2 =  [2, 5, 3, 2, 7, 11];
const sum2 = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 100);
console.log(sum2);

const nestedArray=[[2,5],[4,6,7],[3,6,9,11]];
const flatArray=nestedArray.flatMap((element => element))
console.log(flatArray);