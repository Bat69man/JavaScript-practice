// this is our simple function
function greet1(){
    console.log("Hello world")
}
greet1()

// this is the same function with the function expression
let greet2 = function(){
                console.log("Hello World")
            }
greet2()

// here is the same function with the arrow/lambda operator
// we will just write => instead of 'function' which is more meaningful.
let greet3 = () => {
                console.log("Hello World")
            }

// this is the function with parameter
let add1 = function(num1, num2){
                return num1 + num2
            }
console.log("\n",add1(5,5))

// same add function with =>
let add2 = (num1, num2) => {
    return num1 + num2
}
console.log("",add2(5,15))

// if there is only one statement in the arrow function we dont even have to mention curley braces
// if only statement is a return statement, then don't even mention 'return' keyword
let add3 = (num1, num2) => num1 + num2;
console.log("",add3(5,45))

// it reduces the line of codes and simplifies the coding

let bye = () => console.log("Good bye..")
bye()