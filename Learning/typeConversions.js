// Type conversion (Explicit)
let value1 = 123
console.log(value1, typeof value1)
value1 = String(123);
console.log(value1, typeof value1);


let value2 = "123"
console.log(value2, typeof value2)
value2 = Number("123")
console.log(value2, typeof value2)

//-------Type Coercion-------
console.log()
let x = 8
console.log("\n", x, typeof x)
x = x+""
console.log(x, typeof x)

x = x-2 // - operator converts string back into number for subtraction
console.log(x, typeof x) // number

// Can we convert a string into number with '+' operatior ?  Yes we can use Unary '+' operator to do so
console.log()
x = "8"
// x = x+2 // Nan
x = +x +2
console.log(x, typeof x)

// parseInt() converts string into number if starting letters are numbers
console.log()
x = Number("33 Dharmil Shah")   // NaN
console.log(x, typeof x)
x = parseInt("33 Dharmil Shah") // number
console.log(x, typeof x)
x = parseInt("D33 Dharmil Shah")// NaN
console.log(x, typeof x)
x = +("33 Dharmil Shah")        // NaN
console.log(x, typeof x)


//---------------------------
console.log()
x = !x // converts number into boolean and then revers it
console.log(x, typeof x)

console.log(Boolean(6)) // any number other than 0, null, undefined, Nan, "", '', `` gives True
console.log(Boolean("Dharmil Shah"))
console.log(Boolean(0))     // false
console.log(Boolean(null))  // false
console.log(Boolean(undefined))  // false