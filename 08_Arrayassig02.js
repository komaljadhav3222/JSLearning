const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
// console.log(`1. Find the total elements available or length and log on console
//     2. Log the first element and last element in arrayNumbers and log on console
//     3. Log the third last element using length property and log on console
//     4. Find the all even numbers using for in loop and log on console
//     5. Find the odd numbers for in loop and log on console
//     6. Find all the even positioned elements from arrayNumbers, sum it and log on console
//     7. Find all the odd positioned elements from arrayNumbers, sum it and log on console
//     8. Find the sum of all elements from arrayNumbers, log on console
//    
    console.log(`Length of array :- ${arrayNumbers.length}`);
    console.log(` 2. first element => ${arrayNumbers[0]}  and last element => ${arrayNumbers[arrayNumbers.length-1]} in arrayNumbers`);  
    console.log(` 3.  third last element using length property := ${arrayNumbers.length-3}`);
    console.log(`for in loop`);
    for (const key in arrayNumbers) {
       console.log(` element is - ${arrayNumbers[key]} and key ${key}`);
    }
    console.log(`Even no. element using For in loop`);
    for (const key in arrayNumbers) {
        if (key%2==0) {
            console.log(` element is - ${arrayNumbers[key]} and key ${key}`); 
        }        
     }
     console.log(`Odd no. element using For in loop`);
    for (const key in arrayNumbers) {
        if (key%2!=0) {
            console.log(` element is - ${arrayNumbers[key]} and key ${key}`); 
        }        
     }
     console.log(`Sum of even no. element using For in loop`);
     var sumOfEven=0;
    for (const key in arrayNumbers) {
        if (key%2==0) {            
            sumOfEven=sumOfEven+arrayNumbers[key];            
        }        
     }
     console.log(`Sum of even no. element using For in loop is -> ${sumOfEven}`);

     console.log(`Sum of odd no. element using For in loop`);
     var sumOfOdd=0;
    for (const key in arrayNumbers) {
        if (key%2!=0) {
           sumOfOdd=sumOfOdd+arrayNumbers[key]; 
        }        
     }
     console.log(`Sum of Odd no. element using For in loop is => ${sumOfOdd}`);

     console.log(`Sum of odd no. element using For in loop`);

     var sumOfAll=0;
    for (const key in arrayNumbers) {       
            sumOfAll=sumOfAll+arrayNumbers[key];      
     }
     console.log(`Sum of All elements using For in loop is => ${sumOfAll}`);
     //9. Find the numbers which are multiple of 5
     console.log(`Multiples of 5 from ${arrayNumbers}`);
     for (const element of arrayNumbers) {
        if (element%5==0) {
            console.log(element);  
        }       
    }
    
     console.log(`Is number 115 available in arrayNumbers  ${arrayNumbers.includes(115)}`);
     console.log(`Is number 23 available in arrayNumbers  ${arrayNumbers.includes(23)}`);

     //     12. Insert numbers → 55, 66 before index 3 and log array on console
console.log(`Before Inserting ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66);
console.log(`after inserting ${arrayNumbers}`);

     //     13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
     var arrayOfNumbers=[20,31,40,55,66,25,23,11,29,9,60,2,11];
     console.log(`Before Deleting ${arrayOfNumbers}`);
     arrayOfNumbers.splice(4,3);
     console.log(`after Deleting ${arrayOfNumbers}`);