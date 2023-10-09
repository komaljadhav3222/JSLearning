// Object creation using object literals
let person = {
    name: "Jenny",
    age: 22,
    isMarried: true, 
    show:function(){
     console.log(`Hi Hello, How are you ?`);
    }
 };
 console.log(typeof person);
 console.log(person);
 
 // Property access
 //1. Dot Notation
 let personaName= person.name;
 console.log(`Person name is: ${personaName}`);
 
 console.log(`Person age is: ${person.age}`);
 
 //1. [] Notation
 let nameOfPerson = person["name"]
 console.log(`Person name is: ${nameOfPerson}`);
 
 console.log(`Adding property in object`);
 person.city = "Pune";
 console.log(person);
 //console.table(person);
 
 console.log(`Update property in object`);
 person.age = 20;
 console.log(person);
 
 console.log(`Delete property from an object`);
 delete person.age;
 console.log(person);
 
 console.log(`Adding method in an object`);
 person.show();
 person.display=function(){
     console.log(`I am inside display function`);
 }
 console.log(person);
 person.display();