const arrayNum=[10,20,30,40,50,15];
arrayNum.forEach(element => {
    console.log(element);
});

arrayNum.forEach(function (currentValue,index,array) {
    console.log(`Current value is :- ${currentValue}, index :- ${index}, from :- ${array}`);
    
})
console.log(`using arrow function`);
arrayNum.forEach((currentValue,index,array)=>{

    console.log(`Current value is :- ${currentValue}, index :- ${index}, from :- ${array}`);
   
})

arrayNum.forEach((currentValue)=>{
    console.log(currentValue);
})

console.log(`======== forEach() loop to traverse Set  ===============`);
const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);

setOfRollNum.forEach( (value)=> {
    console.log(value);
} );

console.log(`======== forEach() loop to traverse Map  ===============`);
const map = new Map();
map.set(11, 'Jenny');
map.set(22, 'Bill');
map.set(33, 'Elon');
map.set(44, 'Stew');

map.forEach( (value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
} );