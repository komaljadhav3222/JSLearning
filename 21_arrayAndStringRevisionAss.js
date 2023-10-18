const arr=[11,3,4,11,4,7,3];
console.log(`Before removing duplicates - ${arr}`);
const set=new Set(arr);
const array = [];
for (const iterator of set) {
   array.push(iterator);
}
console.log(`After removing duplicates - ${array}`);