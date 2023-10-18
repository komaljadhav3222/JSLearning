class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

// Create objects for different banks
const axis_bank = new Bank("Axis Bank", "New York", "AXIS12345", "AXIS0001", 4.5);
const sbi_bank = new Bank("SBI Bank", "London", "SBI67890", "SBI0002", 3.75);
const icici_bank = new Bank("ICICI Bank", "San Francisco", "ICICI54321", "ICICI0003", 4.0);
const kotak_bank = new Bank("Kotak Bank", "Los Angeles", "KOTAK78901", "KOTAK0004", 4.25);
const hdfc_bank = new Bank("HDFC Bank", "Chicago", "HDFC23456", "HDFC0005", 3.9);
const punjab_bank = new Bank("Punjab Bank", "Miami", "PUNJAB34567", "PUNJAB0006", 4.2);

// Create a Map with accountNo as keys and bank objects as values
const bankMap = new Map();
bankMap.set(axis_bank.accountNo, axis_bank);
bankMap.set(sbi_bank.accountNo, sbi_bank);
bankMap.set(icici_bank.accountNo, icici_bank);
bankMap.set(kotak_bank.accountNo, kotak_bank);
bankMap.set(hdfc_bank.accountNo, hdfc_bank);
bankMap.set(punjab_bank.accountNo, punjab_bank);

// Traverse the Map and log bankName, accountNo, and interestRate
// bankMap.forEach((bank, accountNo) => {
//     console.log(`Bank Name: ${bank.bankName}, Account No: ${accountNo}, Interest Rate: ${bank.interestRate}%`);
// });

bankMap.forEach((bank , accountNo) => {
  console.log(bank.bankName);  
});