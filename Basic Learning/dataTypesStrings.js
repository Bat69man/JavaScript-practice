/*
    DATA TYPES

    1)Primitive
        - Number
        - String
        - Boolean
        - Null
        - Undefined
        - Symbol
    2)Object
*/

let firstName = "\nDharmil"
let lastName = "Shah"

let fullName = firstName +" "+ lastName // concatination
console.log(fullName)

// Escape characters
console.log("\nDharmil Shah \"Batman\" ")
console.log('\tDharmil Shah \b"Batman" ')

// \n new line
// \t tab
// \v vertical tab
// \b backspace character

let bool = 5 > 6
console.log(bool) // false

// null
let variable = null
console.log(variable)       // null
console.log(typeof variable)// object

// UNDEFINED
let value
console.log(value)          // undefined
console.log(typeof value)   // undefined

// NaN (Not a Number) it's confusing.
console.log( 33 / "Dharmil") // NaN
console.log(typeof (33 / "Dharmil")) // number