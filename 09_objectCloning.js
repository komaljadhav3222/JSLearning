const person = {
    name:'Elon'
}
person.name='Mark';
console.log(person.name);

//Deep clone- it will get separate memory so after copy if we change value of 1 variable it will not change value of 2nd variable 

let firstName = "Komal";
let lastName = "Jadhav";

let myName = firstName; // Deep Clone

console.log(myName);
firstName = 'KJ';
console.log(myName);

myName = 'Ganesh';

let personDet = {
    name: 'Elon',
    city: 'Pune',
    isMarried : true
}
let elonPerson = {
    country: "USA"
}
elonPerson = personDet; // Shallow clone

elonPerson.city= "Mumbai";
console.log(elonPerson.city); // 
console.log(personDet.city);

console.log(`Deep clone using spread operator`);

let stdNagesh = {
    name: 'Nagesh',
    age: 22,
    graduation: "BE - Computer Science"
}

let stdGanesh = { ...stdNagesh}; // Deep clone using spread operator
stdGanesh.name = "Ganesh";

console.log(stdNagesh.name);

let stdJenny = {
    name: 'Jenny',
    age: 22,
    gender: "Female",
    marks: {
        computer: 96,
        math: 78,
        english: 56
    }  
}
let stdBill = JSON.parse(JSON.stringify(stdJenny)) // Deep clone when we have nested object

stdBill.name= "Billgates";

console.log(stdJenny.name);