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

//Add all object elements in a Set and Traverse this Set using for of loop then just log on
//console - Bank name and Location

const bankSet=new Set();
bankSet.add(axis_Bank);
bankSet.add(hdfc_Bank);
bankSet.add(kotak_Bank);
bankSet.add(icici_Bank);
bankSet.add(sbi_Bank);
bankSet.add(panjab_Bank);

for (const key of bankSet) {
    console.log(`Bank Name :- ${key.bank_name}, and location :- ${key.location}`);
}

