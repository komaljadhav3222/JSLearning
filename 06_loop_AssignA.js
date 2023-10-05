console.log(`Vowels present in the string is :- ${vowelCount}`);
console.log(`====================count the vowels - method2 ========================`);
var GivenStr="I am very Good IT developer";
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

function sumOfCube()
{
    var sum=0;

  for (let index = 0; index <= 5; index++) {
    cube=index*index*index;
    sum=sum+cube;
  }
  console.log(`Sum of cube from to 5 are ${sum}`);
}
sumOfCube()

function oddPositionedChars(GivenStr) {
    console.log("Odd position Character from string");
    console.log(`Given String is ${GivenStr}`);
   for (let index = 0; index < GivenStr.length; index++) {
    
   if(index%2==0)
   {
    charAtIndex=GivenStr.charAt(index);
    if (charAtIndex!=" ") {
        console.log(`Odd position Character :- ${charAtIndex}`);
    }    
   }    
   }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT champ");