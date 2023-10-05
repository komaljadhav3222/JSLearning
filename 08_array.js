let arrayOfNum=[10,20,30,40,50,60,"string"];
console.log(typeof arrayOfNum);
console.log(arrayOfNum);

console.log(`Total elements in array :- ${arrayOfNum.length}`);
console.log(`Reverse elements in array `);
for(index=arrayOfNum.length-1;index>=0;index--)
{
    const element = arrayOfNum[index];
     console.log(element);
}
console.log(`Even position elements in array `);
for(index=0;index<arrayOfNum.length;index++)
{
    if (index%2==0) {
        const element = arrayOfNum[index];
        console.log(element);
    }
   
}
console.log(`Add element element in array `);
arrayOfNum.push(88);
console.log(arrayOfNum);
arrayOfNum.pop();
console.log(arrayOfNum);

console.log(`====== Adding element in first position  =========`);
arrayNumbers.unshift(99);
console.log(arrayNumbers);

let arrayN = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in first position =========`);
arrayN.shift();
console.log(arrayN);



//code shared 
let array = [10, 20, 30, 40, 50, 60];
console.log(typeof array);
console.log(array);

console.log(`Total elements in array is : ${array.length}`);

console.log(`=========== Accessing or updating array element===============`);
let element0thIndex = array[0];
console.log(element0thIndex);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last element in array is:  ${array[array.length-2]}`);
console.log(`========= Updating an element===========`);
array[1] = 70;
console.log(array);

console.log(`========= indexOf()===========`);
console.log(array.indexOf(30));

console.log(`========= Traversing an array===========`);
let arrayNum = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element); 
}
console.log(`========= Traversing an array in reverse order===========`);
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

let arrayNums = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
arrayNums.push(88);
console.log(arrayNums);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(arrayNumbers);