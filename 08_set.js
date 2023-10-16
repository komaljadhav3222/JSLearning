// duplicates are not allowed in set
const set = new Set();
set.add(11);
set.add(22);
set.add(33);
set.add(11);
set.add(77);
set.add(88);
set.add(56);

console.log(set);
console.log(typeof set);


set.delete(11);
console.log(set);

console.log(set.has(32));

//Remove duplicates from array using set 
var arrayNumber = [22, 11, 44, 22, 77, 11];
console.log(arrayNumber);
const setNum = new Set(arrayNumber);
console.log(setNum);

//Remove duplicates from array using set and spread operator
arrayNumber = [...new Set(arrayNumber)];
console.log(arrayNumber);