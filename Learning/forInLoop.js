// for-in loop is used to access properties of an object one by one

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
        price: 60000,
    }
}

console.log()
for(let key in programmer){
    console.log(key)
}

console.log()
for(let key in programmer){
    console.log(key,programmer.key)
}

console.log()
for(let key in programmer){
    console.log(key,programmer[key])
}

console.log()
for(let key in programmer.computer){
    console.log(key,programmer.computer[key])
}