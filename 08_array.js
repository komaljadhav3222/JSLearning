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
arrayOfNum.unshift(99);
console.log(arrayOfNum);

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

let numbersArray = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
numbersArray.push(88);
console.log(numbersArray);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(arrayNumbers);

// console.log(`Insert element at the index 3 and at the time of insertion don't replace elements `);
// console.log(`Before insertion array is${arrayNumbers}`);
// arrayNumbers.splice(3,0,100,200,300);//0 for do not replace element
// console.log(`After insertion array is${arrayNumbers}`);

// arrayNumbers.splice(3,2,700);
// console.log(`After insertion array is${arrayNumbers}`);

console.log(`====== splice() to insert element =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// Insert element 99 at index 2 ==> [22, 11, 99, 44, 55, 77, 33]
arrayNumber.splice(2,0,99);
console.log(arrayNumber);

console.log(`Insert elements 100, 200, 400 at index 3 and at the time of insertion don't replace any elements`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// Insert elements 100, 200, 400 at index 3 ==> [22, 11, 44, 100,200,400,55, 77, 33];
arrayNumber.splice(3, 0, 100, 200, 400);
console.log(arrayNumber);

console.log(`Insert an element 500 at index 2 by replacing an element `);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// [22, 11, 500, 55, 77, 33];
arrayNumber.splice(2, 1, 500);
console.log(arrayNumber);

console.log(`Insert an element 700 at index 3 by replacing 2 elements`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// [22, 11, 44, 700, 33]
arrayNumber.splice(3, 2, 700)
console.log(arrayNumber);

console.log(`for in loop`);
for (const key in arrayNumber) {
    const element=arrayNumber[key];
   // console.log(key,element);
    console.log(`Index : ${key} , Element :${element}`);
}

console.log(`========= Traversing an array using while loop ==============`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
var index=0;
while (index<arrayNumber.length) {
    console.log(arrayNumber[index]);
    index++;
}
console.log(`========= Traversing an array using while loop ==============`);
var arrayNumber=[22,11,44,55,77,33];

  var index=0;
do {
    console.log(arrayNumber[index]);
    index++;
} while (index<arrayNumber.length);

// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS
// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`for of loop`);
for (const element of arrayNumber) {
    console.log(element);
}
console.log(`join method`);
const joinedElement = arrayNumber.join(",");
console.log(joinedElement);

console.log(`Resizing an array`);
var arrayNumber = [22, 11, 44, 55, 77, 33];// [22, 11, 44]
arrayNumber.length = 3;
console.log(arrayNumber);

const valueArray = ['name', 'age', 'isMarried', 'city'];
let index=valueArray.indexOf("isMarried");
valueArray.splice(index,1,"Graduation");
console.log(valueArray);