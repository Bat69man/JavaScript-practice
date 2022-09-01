

function greetUser(userName){
    // userName is a local variable of the function

    console.log(user) // accessing global variable inside function
    console.log(`Hello Mr.${userName}`)

    let localVariable = "local variable of greetUser()"
}

let user = "Dharmil Shah" // global variable
greetUser(user)
// console.log(localVariable) // ERROR: accessing local variable outside that scope

/*
    DEFAULT VALUES
*/

function add1(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log(add1(5,3)) // NaN, add(5, 3, undefined)

// instead we can give defaul values to a parameters

function add2(num1, num2=0, num3=0){
    return num1 + num2 + num3;
}
console.log(add2(5,3)) // NaN, add(5, 3, 0)