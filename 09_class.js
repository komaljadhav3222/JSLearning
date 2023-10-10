class Person{
    firstName
    lastName
    city
    graduation
    age
    isMarried
    constructor( firstName,
        lastName,city,graduation,
       age,isMarried)
       {
        this.firstName=firstName;
        this.lastName=lastName;
        this.city=city;
        this.graduation=graduation;
        this.age=age;
        this.isMarried=isMarried;
       }   
}
const personElon= new Person("Elon","Musk","Pune","B.E","52","No");
console.log(personElon);
console.log(`Person Details : ${personElon.firstName} ,${personElon.lastName}`);
const personStew = new Person('Stew', "Job", 'San Francisco', 'Dropout',"56","yes");
 console.log(personStew);

 const personBill = new Person('Bill', "Gates", 'San Francisco', 'Dropout',"67","yes");
 console.log(personBill);

 const personRatanSir = new Person('Ratan', "Tata", 'Mumbai', 'Architecture',"85","yes");
 console.log(personRatanSir);
console.log(`For of loop iterator`);
 const arrayPerson=[personElon,personBill,personStew,personRatanSir];
 for (const iterator of arrayPerson) {
    console.log(iterator);
 }
