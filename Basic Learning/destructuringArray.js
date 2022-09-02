array1 = [1,2,3,4,5]

console.log(array1);

// values of array1 will be assigned to the variables inside the [], and third value will be skipped sice there is an extra comma
let [a,b,,d,e] = array1;

console.log("\nb:" ,b);
console.log("e:" ,e);

// swapping 2 values
let x = 10
let y = 20
console.log("\n", x, y);
[x,y] = [y,x]
console.log("", x, y);

// split methods splits a string into an array using given delimeter

let words = "i am batman and i am savior of Gotham".split(' ')
console.log(words);

[a,b,c,,,, ...d] = words // ... means all rest of the elements of an array will be assigned to that variable/array 'd'

console.log("\n c:",c);
console.log(" d:",d);