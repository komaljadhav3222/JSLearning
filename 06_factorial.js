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
isPrime(45);
isPrime(7);
isPrime(11);
isPrime(13);
isPrime(9);


console.log(`=================== Check whether the given Number is Prime or Not===================`);
const isPrimeNo = num=> {
  const boundary = Math. floor(Math.sqrt(num));
  for (let index = 2; index <= boundary; index++) 
  if (num % index===0) 
  return false; 
  return num >= 2;
    
  };
  console.log(`The Number 11 is ${isPrimeNo(11)}`);
  console.log(`The Number 23 is ${isPrimeNo(23)}`);
  console.log(`The Number 31 is ${isPrimeNo(31)}`);
  console.log(`The Number 44 is ${isPrimeNo(44)}`);
  console.log(`The Number 56 is ${isPrimeNo(56)}`);