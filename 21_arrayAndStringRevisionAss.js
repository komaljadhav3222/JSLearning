const arr=[11,3,4,11,4,7,3];
console.log(`Before removing duplicates - ${arr}`);
const set=new Set(arr);
const array = [];
for (const iterator of set) {
   array.push(iterator);
}
console.log(`After removing duplicates - ${array}`);

let str = "How are you mate";
console.log(`Given String is  ${str}`);
str=str.split(" ");
console.log(typeof str,str);
let newString="";
for (const iterator of str) {   // console.log(iterator);
   for (const key in iterator) {      // console.log(key);
      const char =iterator[key];
      if(key==0 || key==iterator.length-1){         // console.log("iterator => ",iterator[key]);         
         newString=newString+char.toUpperCase();
      }
      else{
         newString=newString+char;
      }
   }
   newString+=" ";
}
console.log(`Expected String is  ${newString}`);