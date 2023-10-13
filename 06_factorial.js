// console.log("factorial");
// function factorial(num){
//     let fact=1;
// for(let i=1;i<=num;i++){
// fact=fact*i;
// }
// console.log(fact);
// }
// factorial(4);

// function isPrime(num){
//     var flag=0;
// for(let index=2;index<num;index++){
//    if(num%index==0){
//     flag=0;
//     break;
//    } 
//    else{
//     flag=1;
//    }
// }
// if(flag==1){
//     console.log(`"Given no.${num} is prime number"`);
// }
// else{
//     console.log(`"Given no.${num} is not prime number"`);
// }
// }
// isPrime(45);
// isPrime(7);
// isPrime(11);
// isPrime(13);
// isPrime(9);


// function isPrimeNumber(num){
//     for (let index = 2; index < num; index++) {
//         if (num%index==0) {
//             return false;
//         }
//     }
//     return true;
// }
// const result = isPrimeNumber(11);
// console.log(`Is Number Prime: ${result}`);



  const array =[11,3,6,10,43,29,50];
  let result=0;
  function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
     result=isPrimeNumber(element);
     console.log(`Given number ${element} Is Prime: ${result}`);
  }
  