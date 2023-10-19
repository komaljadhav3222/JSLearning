let arrowFunction = ()=>{
    console.log(`Inside arrow function`);
};
arrowFunction();

let add=(n1,n2)=>{
    console.log(`Addition is `,n1+n2);
}
add(20,56);
add(10);

let square =num => num*num;
let result=square(8);
console.log(`Square of is ${result}`);