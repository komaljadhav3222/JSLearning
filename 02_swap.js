console.log("==== swap ========");

function swap(valueOne, valueTwo) { // function declaration

    console.log('Before swap ==>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After swap ==>', valueOne, valueTwo);
}

swap(100, 200); // function call / invocation
swap("Pune", "Mumbai");
swap("India", "USA");