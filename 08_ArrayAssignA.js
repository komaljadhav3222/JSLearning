const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`First Element : ${arrayFruits[0]}`);
console.log(`Last Element : ${arrayFruits[arrayFruits.length-1]}`);
console.log(`2.Add element → “Papaya” before the element ‘Banana’ and then log array on console`);
console.log(`Before adding papaya Given array is :- ${arrayFruits}`);
arrayFruits.unshift("Papaya");
console.log(`After adding papaya Given array is :- ${arrayFruits}`);
console.log(`3. Remove ‘Mango’ from the array`);
console.log(`Before removing Mango  Given array is :- ${arrayFruits}`);
arrayFruits.splice(arrayFruits.length-2,1)
console.log(`After removing Given array is :- ${arrayFruits}`);
console.log(`4. Add element or insert an element ‘Pineapple’ at the last position`);
console.log(`Before adding ‘Pineapple’ Given array is :- ${arrayFruits}`);
arrayFruits.push("Pineapple");
console.log(`After adding ‘Pineapple’ Given array is :- ${arrayFruits}`);
console.log(`5. Insert an element - ‘Dragon Fruit’ before “Water Melon”`);
arrayFruits.splice(arrayFruits.length-2,0,"Dragon Fruit");
console.log(`After inserting  ‘Dragon Fruit’ before “Water Melon”Given array is :- ${arrayFruits}`);
console.log(`6. Replace an element ‘Orange’ with ‘Kiwi’`);
const index= arrayFruits.indexOf("Orange");
arrayFruits.splice(index,1,"Kiwi");
console.log(`After Replace an element ‘Orange’ with ‘Kiwi’ Given array is :- ${arrayFruits}`);
console.log(`7. Log the elements starting from index 1 to 4`);
for (let index = 1; index <=4; index++) {   
    console.log(arrayFruits[index]);
}
console.log(`8. Only select last 3 element and log on console: Use the length property`);
for (let index=arrayFruits.length-3 ; index <arrayFruits.length; index++) {   
    console.log(arrayFruits[index]);
}