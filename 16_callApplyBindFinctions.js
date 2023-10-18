// we can call any function with argument and by passing any value
//Calls a method of an object, substituting another object for the current object.
const person = {
    name: "Elon Musk",
    age: 54,
    totalCompany: 9
}
function show(greet){
    console.log('Inside show function...');
    console.log(greet);
    console.log(this.name, this.age);
}
show.call(person, 'Good Morning');

console.log(`======= apply() ========`);
function details(sonName, wifeName){
    console.log(this.name, this.age);
    console.log(`Son name: ${sonName}, Wife Name: ${wifeName}`);
}
//apply method invokes a function with given value and allows us to pass set of arguments as an array
details.apply(person, ['X', 'Jenny']);

console.log(`======= bind() ========`);
const stewPerson = {
    name: "Stew Jobs",
    age: 54,
    companyName: 'Apple'
}
function productsDetails(iphone, laptop){
    console.log(this.name, this.companyName);
    console.log(`Iphone: ${iphone}, Laptop: ${laptop}`);
}
//bind method returns function and allows us pass 
const newFunction = productsDetails.bind(stewPerson);
newFunction('iPhone 15', 'Mac book M2');


