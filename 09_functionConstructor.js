function Bank(bankName ,location ,pin){
this.bankName=bankName;
this.location=location;
this.pin=pin;
this.show=function(){
    console.log(`${this.bankName},${this.location},${this.pin}`);
}
}
const sbiBank=new Bank('SBI','Pune',124563);
//console.log(sbiBank.bankName,sbiBank.location,sbiBank.pin);

const axisBank=new Bank('AXIS','Mumbai',127896);
//console.log(axisBank.bankName,axisBank.location,axisBank.pin);

const hdfcBank=new Bank('HDFC','Bangalore',112233);
//console.log(hdfcBank.bankName,hdfcBank.location,hdfcBank.pin);
 //prototype special object that is associated to every function and object by default (parent class from which sub classes inherit the properties) is also blueprint 
 //like class, in has common properties(eg. - length and push properties are defined in Array.prototype)
Bank.prototype.country="Bharat";
console.log(sbiBank.country);
console.log(axisBank.country);
console.log(hdfcBank.country);

sbiBank.show();
axisBank.show();
hdfcBank.show();

console.log(axisBank instanceof Bank);