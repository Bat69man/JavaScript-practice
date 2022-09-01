console.log("Hello World !");

/*
    The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope.

    The scope of let not only limited to the block in which it is defined but variable with let also do not get added with global window object even if it get declared outside of any block. But we can access variable with var from window object if it is defined globally.

    Also, one difference between var and let is variable with var can be redeclared to some other value while variable could not be redeclared if it is defined with let.
*/

let num = 33+33
console.log(num)

num = 45+45
console.log(num)

let userName = "Dharmil"
console.log(userName)


let radius = 5
const PI = 22/7
let area = PI * radius * radius
console.log("Area: "+area)