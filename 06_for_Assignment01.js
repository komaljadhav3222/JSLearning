console.log(`==========print values from 5 to 15 with increment==========`);
for (let index = 5; index <=15 ; index++) {
   console.log(index);
}
console.log(`//==========print values from 50 to 40 by decrement==========`);
for (let i = 50; i >=40 ; i--) {
    console.log(i);
 }
 console.log("==========table of 5==========");
 
 for (let index = 1; index <=10 ; index++) 
 {
   var tableValue= 5*index;
console.log(`5 * ${index} = ${tableValue}`);
 }
 console.log("==========table of 10==========");
 for (let index = 1; index <=10 ; index++) 
 {
   var tableValue= 10*index;
console.log(`10 * ${index} = ${tableValue}`);
 }
 console.log("==========table of 10 in reverse order==========");
 for (let index = 10; index >=1 ; index--) 
 {
   var tableValue= 10*index;
console.log(`10* ${index} = ${tableValue}`);
 }

 console.log(`===========find first 15 odd numbers==========`);
var count=0;
    for (let index = 0; index <= 10; index++) {
        if (index%2!=0) {
         console.log(index);      
        }
}
console.log(`===========find first 10 even numbers==========`);

var count=0;
    for (let index = 0; index <= 10; index++) {
        if (index%2==0) {
         console.log(index);      
        }
}