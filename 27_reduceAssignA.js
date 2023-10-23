const array=[20,11,40,25,37,49,9,90,60,2,19];
console.log('======= sum of array elements using reduce method================');
const sum=array.reduce((runningTotal,value)=>{
return runningTotal+value;
});
console.log(sum);
console.log('======= sum of array elements using for loop================');
let sumUsingFor=0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sumUsingFor=sumUsingFor+element;
}
console.log(sumUsingFor);
console.log('======= sum of array elements using for each================');
let sumUsingForEach=0;
array.forEach(element => {
    sumUsingForEach=sumUsingForEach+element
});
console.log(sumUsingForEach);
console.log('======= sum of array elements using for of================');
let sumUsingForOf=0;
for (const iterator of array) {
    sumUsingForOf=sumUsingForOf+iterator;
}
console.log(sumUsingForOf);
console.log('======= sum of array elements using for in================');
let sumUsingForIn=0;
for (const key in array) {
   const element=array[key];
   sumUsingForIn=sumUsingForIn+element;
}
console.log(sumUsingForIn);
console.log(`Find the numbers multiple of 5 and then sum it[ Hint → filter first then use reduce( ) ]`);

const multOfFive=array.filter((currentValue)=>{
return currentValue%5==0
})
console.log(`Multiple of 5 => ${multOfFive}`);
const sumOfMultFive=multOfFive.reduce((runningTotal,value)=>{
return runningTotal+value;
});
console.log(`Sum of Multiple of 5 => ${sumOfMultFive}`);