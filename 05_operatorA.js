function squareOfWordLength(str1){
 var length=str1.length;
 console.log(`Given word is -> ${str1} and Square of word length is ${length**2}`);
}
squareOfWordLength("Developer Smart")

function divideLengthByWord(str1)
{
    var length=str1.length;
    var words=str1.split(" ");
    console.log(`Given string is ${str1} and string length divide by no. of words is :- ${length/words.length}`);
}
divideLengthByWord("I am Angular Developer")