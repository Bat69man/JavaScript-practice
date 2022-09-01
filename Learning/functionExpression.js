/*
    expression simply means it will be evaluated and assigned to particular variable

    let a = 3 + 4;
    Here, '3 + 4' is an expression

    JS treats function as an object.
    All datatypes other than premitive, are Object type.
    So function is also an Object datatype.

    So now we know both terms, expression and function.
*/

let add = function(number1, number2){
            return number1 + number2
        }

/*
    Here we are assigning an anonymous(nameless) function to a variable/object (add).

    This function will not have any name.
    
    This is called Function Expression. Means first the definition of the function is evaluated and then assigned to a variable.

    We are simpky creating an object(function) and assigning to a reference variable.

    we can treat add as a function now since function do not have any name
*/

console.log(add(5, 10))

let sum = add // creating copy with different name

console.log(sum(5, 10))
console.log("\nadd:",add)
console.log("sum:",sum)