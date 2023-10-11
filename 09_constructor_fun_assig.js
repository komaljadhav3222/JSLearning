//Create a constructor function with name→ Bank and add the data member such as
function Bank(bankName, location, ifscCode, branchCode){
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;
}
//Create the objects such as yesBank, sbiBank, mahBank, axisBank and log the details with
//meaning msg as Bank Details is: ${bankName}, ${location}, ${ifscCode}, ${branchCode}
const yesBank=new Bank("Yes Bank","Pune","yes789654",458696);
const mahBank=new Bank("Maharashtra Bank","Mumbai","mah789654",785474);
const axisBank=new Bank("AXIS Bank","Satara","axs789654",125489);
const sbiBank=new Bank("SBI Bank","Sangli","sbi789654",632574);

console.log(`${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

//3. Add the data member → openTime = “9 AM IST” on prototype object
Bank.prototype.openTime = "9 AM IST";

//4. Add one more data member → closeTime =”6 PM IST” on prototype object
Bank.prototype.closeTime = "6 PM IST";

//With meaningful msg Log the openTime and closeTime of object sbiBank
console.log(`Please visit the branch between ${sbiBank.openTime} and ${sbiBank.closeTime}`);

//With meaningful msg Log the bankName and closeTime of object axisBank
console.log(`Please visit the branch - ${axisBank.bankName} before ${axisBank.closeTime}`);
//With meaningful msg Log the bankName, branchCode and openTime of object yesBank

console.log(`Please visit the branch -${yesBank.branchCode} of ${yesBank.bankName} after ${yesBank.openTime}`);