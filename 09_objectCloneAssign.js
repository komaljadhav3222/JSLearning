// 1. Create the object → ‘bankSbi’ using literals with at least 4 properties
// 2. Create the object → ‘bankLocation’ using literals with properties: street, city, pin
console.log(`Creating the object ‘bankSbi’ `);
const bankSbi={
branchName:"Hinjewadi SBI",
ifscCode:"sbi456987",
branchManager:"Mr. Raut",
contactDetails:5896321478
}
console.log(`Creating the object bankLocation `);
const bankLocation= {
    street:"Hinjewadi",
    city: "Pune",
    pin: 415015
   
}
// Clone the step 1 ( bankSbi ) and step 2 ( bankLocation ) objects using
// ○ Object.assign( )
Object.assign(bankSbi,bankLocation);
console.log(`Merged object is - `);
console.table(bankSbi);

// Create the object using object literals → rateOfInterest with properties
// ○ homeLoanInterest, personalLoanInterest, dueInterest
console.log(`Creating the object rateOfInterest `);
const rateOfInterest= {
    homeLoanInterest: "12%",
    personalLoanInterest:"11%",
    dueInterest:"18%"   
}

// 5. Merge the step 1, step 2 and step 4 objects into new object namely → sbiDetails
// Log all the properties that ‘sbiDetails’ got after merging with meaning message
console.log(`Merge the bankSbi, bankLocation and rateOfInterest objects into new object namely → sbiDetails`);
const sbiDetails=Object.assign(bankSbi,bankLocation,rateOfInterest);
// console.log(sbiDetails);
console.table(sbiDetails);

// 6. Traverse this merged object - step 5 using for in loop and log details properly
for (const key in sbiDetails) {
    console.log(`${key} :- ${sbiDetails[key]}`);
}

const bank =Object.assign(bankSbi,bankLocation);
console.log(bank);
console.table(bank);