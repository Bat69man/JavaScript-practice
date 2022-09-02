/*
let stackOverflow = (number) => {
    console.log(number++);
    stackOverflow(number); // limit: 10352
}

stackOverflow(1);
*/

let sum = (number) => {
    if(number > 0){
        return number + sum(number-1);
    }
    else{
        return 0;
    }
}

function factorial(number){
    if(number > 1){
        return number * factorial(number-1);
    }
    else{
        return 1;
    }
}

let number = 5;
console.log("Number:",number);
console.log("Sum:",sum(number));

console.log("Factorial:",factorial(number));