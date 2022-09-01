
// complex objects means having an object inside an object

let programmer = {
    name: "Dharmil Shah",
    technology: "JavaScript",
    'work exp': 4,
    // computer is a property of a pragrammer but it is not just a single value properties as it contains many informations. So we can create object of that thing to make it easy. 
    computer: {
        type: "Laptop",
        company: "Lenovo",
        processor: "AMD Ryzen 7",
        processingCores: 8,
        ram: 16,
        screenSize: 15.6,
        price: 60000,
        weight: 1.6
    }
}

console.log(`
${programmer.name}'s ${programmer.computer.type} is of ${programmer.computer.company}`)
console.log("\n"+programmer.computer.company)
console.log(programmer.computer.company.length) // printing length of string
console.log(programmer.computer.type,"\n\n")

/*  
    if we are not sure that whether that property exists or not then we can use '?' operator to tackle error if not exists.

    '?' in the printing is used to check whether the propertiy exsists or not.
    suppose if we are printing a property that is not a part of the object it will print' undefined'

    but if we are performing any operations on that so it will thwoe an error ofCoruse.

    one way is to check with the if condition that if(!object.propeerty === undefined){ operations; }

    another way is '?' operator

    i.e we are printing the length of String type property (name) 
*/

console.log(programmer.computer.brand) // undefined
// console.log(programmer.computer.brand.length) // error
console.log(programmer.computer?.brand?.length)
// by putting '?', if property does not exist then it will not give error it just says 'undefined'



/*
    DELETE

    if we want to delete specific property of an object then we can simply do that with help of delete keyword
*/
delete programmer.computer
console.log("\nAfter deleting computer \n",programmer)