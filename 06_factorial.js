console.log("factorial");
function factorial(num){
    let fact=1;
for(let i=1;i<=num;i++){
fact=fact*i;
}
console.log(fact);
}
factorial(4);

function isPrime(num){
    var flag=0;
for(let index=2;index<num;index++){
   if(num%index==0){
    flag=0;
    break;
   } 
   else{
    flag=1;
   }
}
if(flag==1){
    console.log(`"Given no.${num} is prime number"`);
}
else{
    console.log(`"Given no.${num} is not prime number"`);
}
}
isPrime(45)
isPrime(7)
isPrime(11)
isPrime(13)
isPrime(9)