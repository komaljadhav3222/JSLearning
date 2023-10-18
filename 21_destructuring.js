const personBill={
    name:'Bill Gates',
    age:54 ,
    isMarried: true,
    city:'Mumbai',
    pin:411011
}
console.log(personBill);
//normally we extract the values from object using dot operator  Eg. - 
console.log(personBill.name);
//using object destructuring we get Extracted values Eg-

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

//object destructuring with default value
let {name, age, isMarried, city, country="Bharat"} = personBill;
console.log(name, age, isMarried, city, country);

console.log(`======================================Array Destructuring======================================`);

const array = ['Mona', 'Sona', 'Tona', 'Bawa'];

let [element1, element2, element3, element4, element5='Khona']= array;

console.log(element1, element2, element3, element4, element5);