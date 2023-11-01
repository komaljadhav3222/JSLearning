//repeated char count in a string
//one array of even no.=sum of array element
//prime
console.log(`============== one array of even no. and print sum of array element ====================`);
const arrayEven=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32];

let sum=0;
for (let index = 0; index < arrayEven.length-1; index++) {
   
    let element= arrayEven[index];
    sum=sum+element;
}
console.log(sum);
console.log(`============== prime no series 1 to 100 ====================`);
//prime no series
for (let i = 1; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
console.log(`============== repeated char count in a string ====================`);
//repeated char count in a string

function countRepeating(str) {
	  	// creating a new map
  	let map = new Map();
  	for (let i = 0; i < str.length; i++) {
		map.set(str[i], 0);
	}

	// iterate on the whole string and update the count of each character
	for (let i = 0; i < str.length; i++) {
		let curr_count = map.get(str[i]);
		map.set(str[i], curr_count + 1);
  	}

  	// printing the count of each character
  	for (let [key, value] of map) {
		console.log(`${key} occurs ${value} times.`);
  	}
}

let given_string = "I am a good programmer";
countRepeating(given_string);

