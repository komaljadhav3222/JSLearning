//Create an object using literals namely→ personalDetails with your actual detail.
const personalDetails={
    firstName: "Komal",
    lastName:"Jadhav",
    graduation:"BE - computer science",
    city: "Pune"
}
//Create an object using literals → collegeDetails with your college details
const collegeDetails={
    name: "KBP",
    city: "Satara",
    noOfDepartments:9,
    university:"Shivaji University,Kolhapur"
}
//3. Merge these two objects and log details on console with meaning message.
let mergedObject=Object.assign(personalDetails,collegeDetails);
console.table(mergedObject);
// 4. Create an array of your friend names and freeze it.
let friends=["Jenny","steve","Bill","Elon"];
// 5. Iterate step 4 array using for of loop and log friend names on console
for (const names of friends) {
    console.log(`${names}`);
}
// 6. Given a string company = “Codemind Technology”;
// a. Write a code to reverse only word → Technology
// b. Expected output → “ ygolonhceT” 
let company = "Codemind Technology";
console.log(`Given String is ${company}`);
let reverse="";
for (let index =company.length-1 ; index >0; index--) {

    let char=company.charAt(index);
   // console.log(char);
    if(char!=" "){
        reverse=reverse+char;  
    }
    else
     break;
}
console.log(`Resultant String is ${reverse}`);