// 1. Think of all the properties that you could add ( Add minimum 5 properties)
// 2. Also include nested object ‘degrees’ like engineering: ‘CSC’, PHD: ‘Adv Computing’
// and few more.
// 3. Also add one array → ‘certificates’ with his certificates like ‘Hacker Rank
// Participation’, ‘Certificate in IFE course’, ‘Certificate in Adv Programming’
// 4. Try to add new property like totalExperience: “14 years” and log on console
// 5. Modify any existing property and log complete object on console

const professor ={
name:"Komal",
education:"P.H.D",
age:30,
city:"Pune",
Specialization:"Computer Science",
Institute:"K.B.P",
Degrees :{
    engineering: "CSC",
    PHD: "Adv Computing"    
},
certificates:["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"]
}
console.log(professor);
//Try to add new property like totalExperience: “14 years” and log on console

// professor.totalExperience={ totalExperience:"14 years"};
professor.totalExperience="14 years";
console.log(professor.totalExperience);
// 5. Modify any existing property and log complete object on console
professor.city="Mumbai";
console.log(professor.city);
// 6. Add one new certificate → “Oracle Certified” at the end of array → certificates
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);
// 7. Log the last element of the array certificates.
const lastIndexedElement=professor.certificates.length-1;
console.log(professor.certificates[lastIndexedElement]);
// 8. Log complete object on console.
console.log(professor);
// 9. Traverse array→ certificates using for of loop
for (const element of professor.certificates) {
  console.log(element);  
}











