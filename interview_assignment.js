//repeated char count in a string
//one array of even no.=sum of array element
//prime
console.log(`============== one array of even no. and print sum of array element ====================`);
const arrayEven=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32];

let sum=0;
for (let index = 0; index < arrayEven.length-1; index++) {
   
    let element= arrayEven[index];
    sum=sum+element;
}
console.log(sum);
console.log(`============== prime no series 1 to 100 ====================`);
//prime no series
for (let i = 1; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
console.log(`============== repeated char count in a string ====================`);
//repeated char count in a string
let str ="I am a";
let string=str.split(" ");
let count=0;
let emptyCharCount=0;
let newStrArray=[];
    for (let index = 0; index < str.length; index++) {
        const element = str.charAt(index).toUpperCase();
        if (element==" ") {
            emptyCharCount++;
          console.log("empty character - ",emptyCharCount);
        } else {
            newStrArray.push(element); 
        }
    // console.log(`element - ${element} - count- ${count}`);
    }
    console.log(newStrArray);
    var newString="";
   for (const key in newStrArray) {
    const element = newStrArray[key];
   
    if (newString.includes(element)) {
       // newString=newString+element;
        count++;
    } else {
        newString=newString+element;
        count=1;
    }
    console.log(`element - ${element} - count- ${count}`);
    
   }
    
   
    


