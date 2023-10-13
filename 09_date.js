const date =new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.getDate());// do assignment
console.log(date.getMonth());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getFullYear());
console.log(new Date("Oct 28 , 2023 09:24:00 "));
console.log(new Date("28 Oct 2023"));
console.log(new Date("28/10/2023"));//invalid 
console.log(new Date("28-10-2023"));//invalid
//Write a JavaScript program to get the current date.
const date1 =new Date();
console.log(`Current date is - ${date1.toDateString()}`);
const square10 = Math.pow(10,2);
console.log(square10);

const maxNum=Math.max(23.56, 67, 89, 90.567, 45, 67);
console.log(maxNum);