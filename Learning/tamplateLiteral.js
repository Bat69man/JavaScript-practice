let num1 = 7
let num2 = 4
let result = num1 + num2

// we want output as 7 + 4 = 11
console.log("num1 + num2 = result") // it wont work
console.log("7 + 4 = result") // neither this will work

/*
    1) one way is concatination of string
    2) another way is template literals
*/

// 1) Concatination
console.log(num1+" + "+num2+" = "+result)

// 2) Template literals
// `` (backtick) is used to instead of single/double quotes
// ${variable_name} is used here

console.log(`${num1} + ${num2} = ${result}`)
console.log()
// another example
// want to print "student of MCA3" in the new line

// without template literals 
console.log("Dharmil shah \nstudent of MCA3")

// with template literal
console.log(`Dharmil shah
student of MCA3`) // it just prints new line as it is
