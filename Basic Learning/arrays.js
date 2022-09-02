/*
    Array is a collection of elements under the same name.
    We can access elements using index numbers
    Array can contain any type of elements like numbers, strings, objects, functions.
    Array is a special kind of objects which uses numbers index instead named index like normal objects.

    We can cerate arrays in 2 ways

    let array = new Array();
    let array = [];
    let array = new Array(1,2,3);
    let array = [1,2,3];

    array methods: https://www.w3schools.com/jsref/jsref_obj_array.aspe
*/
let array1 = [];

array1 = 1,2,3
console.log(array1);

array1 = [1,2,3]
console.log(array1);
console.log("length:", array1.length);
console.log("type:", typeof array1);
// there are certain array methods we can use to manipulate arrays

array1.push(4)  // add the element at the last
array1.push(5)  // and returns the mew length of the array

console.log("\npushed: ", array1);
array1.pop()    // deletes and returns the last element of the array
console.log("poped: ", array1);
array1.shift()  // it removes first element of the array and pushes all elements to the one ondex back.
console.log("shifted: ", array1);

array1.unshift(1) // adds an element at the begining of the array
console.log("unshifted: ", array1, "\n");

// toString methods converts array to string but without seperator
// join method joins array element in a string with the seperator we define
let joinedArray = array1.join(",")
console.log(joinedArray);

// filetrs the elements based on the given condition and returns array
greaterThanThree = array1.filter(x => x>3)
console.log("greater than three:",greaterThanThree);

// array.foreach methods takes function as an argument and sends each element one by one in that function as an argument'

function printElement(element){
    console.log(element);
}

array1.forEach(printElement);
console.log();
array1.forEach( (element, index) => {console.log(index, element)});

// isArray function is used to check wether objects is an array or not
console.log("is array?:",Array.isArray(array1));

// different types of values in array
// string, number, object, function
data = [ 'Batman', 33, {tech:'Java',}, function (){console.log("Hello world")} ]

console.log();
data.forEach(x => console.log(x))
data[3](); // Hello world