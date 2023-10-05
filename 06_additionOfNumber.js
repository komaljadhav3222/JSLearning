//addition of 1-10
var sum=0;
for(let index =0;index<=10;index++)
{
sum =sum+index;
}
console.log(`addition of 1 to 10 is ${sum}`);

// Reverse the string

var GivenStr="Developer";
var ReverseString="";
for (let index = GivenStr.length-1; index >=0; index--) {
    ReverseString=ReverseString+GivenStr.charAt(index);
    
}
console.log(`ReverseString is ${ReverseString}`);

//count the vowels
console.log(`====================count the vowels ========================`);
var GivenStr="I am UI developer";
var vowelCount=0;
for (let index = 0; index <GivenStr.length-1 ; index++) {
    var char =GivenStr.charAt(index)
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
    {
        vowelCount++; 
       // console.log(`count increased for char ${char}`); 
    }    
}
console.log(`Vowels present in the string is :- ${vowelCount}`);
console.log(`====================count the vowels - method2 ========================`);
var GivenStr="I am UI developer";
var vowelCount=0;
var vowelCap="AEIOU";
for (let index = 0; index <GivenStr.length-1 ; index++) {
    var char =GivenStr.charAt(index).toUpperCase();
    if(vowelCap.includes(char))
    {
        vowelCount++; 
    }  
}
console.log(`Total number of vowels are: ${vowelCount}`);

console.log(undefined+1);
