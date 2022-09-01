// objects represents real entity in virtual world

// there are multiple ways to create an Objects in JS

/* 
    1) Object Literals
    
    we declare/define all the properties of that object at a time on the go literally.
*/
let object1 = {}

// printing empty object
console.log(typeof object1, object1)


// in objects we dont use '=' to assign values. here we use ':' to assign values to properties
// we can also have methods/functions in the object as well as properties/variables
let programmer = {
    name: "Dharmil Shah",
    degree: "MCA",
    passout: 2023,
    technology : "JS",
    'work exp': 4
}

// printing whole object
console.log("\nprogrammer",programmer)

// acccessing specific values
console.log("Name:",programmer.name)
console.log("Tech:",programmer['name'])

/*  
    we will use object[''] method when we have name of the property with more than one word like here we have 'work exp'.

    in this case we cant use (.) operator
*/
console.log("Work Experience:",programmer["work exp"])

/*
    another usecase of using [''] method is when you dont know what to fetch.

    i.e you are asking user what to fetch according to the user input we are fetching data of an object
*/

let userInput = "degree"
console.log(`Programmers ${userInput}: ${programmer[userInput]}`)