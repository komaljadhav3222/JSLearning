let arrayNumbers=[22,11,44,55,77,33];
//Wap to find even positioned value
var sum=0;
console.log(`Even positioned array elements from array= ${arrayNumbers}`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2==0)
    {
        const element = arrayNumbers[index];
        console.log(`${element}`);
    }  
    
}
console.log(`Sum of array elements from array= ${arrayNumbers}`);
for (let index = 0; index < arrayNumbers.length; index++) {
    {
        sum=sum+arrayNumbers[index]
        
    }    
}
console.log(`${sum}`);