/*
    Functions inside objects are called methods.
    
    Data/properties defines what object knows.
    
    Methods defines what an objects can do.

    same way we can define methods as we define properties in objects with ':'
*/

let computer = {
    type: "Laptop",
    ram: 16,
    cpu: "AMD Ryzen 7",
    brand: "Lenovo",

    greet: function(){
            console.log("Welcome to computer world")
        }
}

computer.greet()