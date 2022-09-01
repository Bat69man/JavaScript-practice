let computer2 = {
    type: "Laptop",
    ram: 16,
    cpu: "i9",
    brand: "Lenovo",
}

let computer = {
    type: "Laptop",
    ram: 16,
    cpu: "i7",
    brand: "Lenovo",

    getType: function(){
            /*
                console.log(type) // ERROR: 'type' is not defined
                
                we can use object name to specify which object's property we are accessing

                console.log(computer.type) 
                
                this works fine
                
                problem is we can have multiple objects and can't change name of it one by one in the function
                
                so instead we can use 'this' keyword
            */
            console.log(this.type)
        },
    compare: function(other){
            console.log( this.cpu > other.cpu ? this : other );
        }
}

computer.getType();
computer.compare(computer2);