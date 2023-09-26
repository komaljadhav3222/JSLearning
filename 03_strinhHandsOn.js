function stringHandsOn()
{
    var givenStr = "     Hey you are doing good, keep it up      ";
    console.log(`1. Given String is - ${givenStr}`);
    console.log(`2. Length of the string is - ${givenStr.length}`);
    var result= givenStr.trim();
    console.log(`3. Given String after trim - ${result} and the length of the string after trim - ${result.length}`);
   console.log(`4. Extra spaces removed by trim = ${givenStr.length - result.length} `);
   console.log(`5. first character is : ${result.charAt(0)} and last character is ${result.charAt(result.length-1)}`);
   var words = result.split(" ");
   console.log(`6. Total no. of words after trim are : ${words.length}`);
   console.log(`7. Index of good is ${result.indexOf("good")}`);
   var sliceAfterTrim =result.slice(22);
   var subStringAfterTrim = result.substring(22);
   console.log(`8. (slice) is -"${sliceAfterTrim}" and substring is "${subStringAfterTrim}"`);

   console.log(`9. Whether string ends with "up"? - ${result.endsWith("up")}`);
   console.log(`10. Whether string starts with "Hey"? - ${result.startsWith("Hey")}`)

}
stringHandsOn()