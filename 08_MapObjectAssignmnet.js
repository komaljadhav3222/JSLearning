class Bank{
    bank_name  
    location
     account_no
      ifsc
       interest_rate
       constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
}

//Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
const axis_Bank=new Bank("AXIS","PUNE",452563985674,"axis456985",11);
const hdfc_Bank=new Bank("HDFC","MUMBAI",857496865478,"hdfc456985",14);
const kotak_Bank=new Bank("KOTAK","SATARA",963258741123,"kotak456985",11.5);
const icici_Bank=new Bank("ICICI","SANGLI",123589647789,"icici456985",12);
const sbi_Bank=new Bank("STATE BANK OF INDIA","SOLAPUR",456321789963,"sbi456985",13);
const panjab_Bank=new Bank("PANJAB NATIONAL BANK","KOLHAPUR",221133556644,"pnb456985",13.5);

//Create a Map in such way that key should be accountNo and value is object that is created in step B.
const mapOfBank =new Map();
mapOfBank.set(axis_Bank.account_no,axis_Bank);
mapOfBank.set(hdfc_Bank.account_no,hdfc_Bank);
mapOfBank.set(kotak_Bank.account_no,kotak_Bank);
mapOfBank.set(icici_Bank.account_no,icici_Bank);
mapOfBank.set(sbi_Bank.account_no,sbi_Bank);
mapOfBank.set(panjab_Bank.account_no,panjab_Bank);

//Traverse the map, Log bankName, accountNo and interestRate for each object
// for (const bank of mapOfBank) {
//   console.log(bank);
//   console.log(bank.bank_name);
// }

for (const [accountNo, bank] of mapOfBank) {
    console.log(`Bank Name: ${bank.bankName}`);
    console.log(`Account Number: ${accountNo}`);
    console.log(`Interest Rate: ${bank.interestRate}`);
    console.log();
}