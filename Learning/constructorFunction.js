/*
    Sometimes we want more than one objects of the same blue print which have all the properties and methods in common.

    So instead of creating different objects manually, we can use constuctor function.

    Constuctor funtion's naming convention is to keep first letter capital.
    let's make an constuctor for type laptop.

    To make constuctor function we just have to pass all the properties of the blueprint as parameters.
*/

function Laptop(brand, cpu, ram){
    this.brand = brand
    this.cpu = cpu
    this.ram = ram

    // we can also add methods just like a normal objects, but using this keyword here.
    this.getConfig = function (){
                    console.log("\n Brand: "+this.brand+" \n Cpu: "+this.cpu+"\n Ram: "+this.ram);
                }
    /*
    return this ;
    
        this line is already there, you don't have to menntion this manually.
    */
}

/*
    Since we are creating objects of Laptop and each object will exist seperately, means changes in one object will not effect other objects.

    so that, we will use 'new' keyword to make objects just like java.

    'new' keyword creates a new object
*/ 
let laptop1 = new Laptop("Lenovo", "intel i7", 16)
let laptop2 = new Laptop("Dell", "intel i5", 8)
console.log("\n", laptop1);
console.log("\n", laptop2);

// changes in an object wont affect other

laptop1.cpu = "AMD R7"

console.log("\n\n", laptop1);
console.log("\n", laptop2);

laptop1.getConfig()