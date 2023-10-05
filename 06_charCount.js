function charCountA(GivenStr){
console.log(`====================count chat A========================`);
var countA=0;
var charA="Aa";
for (let index = 0; index <GivenStr.length-1 ; index++) {
    var char =GivenStr.charAt(index).toUpperCase();
    if(charA.includes(char))
    {
        countA++; 
    }  
}
console.log(`in Given String ${GivenStr} Total count of A are: ${countA}`);
}
charCountA("I am learning JavaScript. The language of Internet.");
charCountA("My favorite movie is LAggAn");