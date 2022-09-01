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
let num = 33
let float = 33.33

// 'typeof' operator is used toknow the datatypes of the value

console.log(typeof num)     // number
console.log(typeof float)   // number
console.log(typeof name)    // atring

let hexaDecimal = 0xf
console.log(hexaDecimal) // 15

// We can put underscore betwen numbers to make it more readable

let largeNumber = 1_00_00_000 // 1 crore
// range beyond max value will be infinity
console.log(5/0) // Infinity

// to store really big value as it is, we can use Bigint data type to store it. We will mention 'n' at the end of the number to make it Bigint

let bigNumber1 = 12121212121212111212121212121212
let bigNumber2 = 12121212121212121212121212121212n

console.log("Bignumber1: "+bigNumber1)
console.log("Bignumber2: "+bigNumber2)

// console.log(bigNumber2 + 2) // Type conversion Error
console.log(bigNumber2 + 2n) // Works fine