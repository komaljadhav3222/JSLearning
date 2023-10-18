//In JS function is call as first class citizen
//1. We can use function as an argument (Callback)
//2. Function can be stored in a variable (function expression)
//3. Function can return another function

function outer() {
    console.log(`Inside Outer Function`);
    return function inner() {
        console.log(`Inside inner function`);
        
    }
}
outer()();