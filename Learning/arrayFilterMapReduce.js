array = [1,2,3,4,5,6,7,8,9]

// using filter methods we can filter elements

array.filter( element => element%2===0)
     .forEach(element => {
        console.log(element);
     });

// .map() changes the actual value unlike .foreach()
// i.e we want to double all the odd values
console.log();
array.filter( x => x%2===1)
     .map( n => n*2).forEach( x => console.log(x))

// .reduce() will give only one value unlike .foreach()
// we want the sum of all the values

console.log(array);

let sum = array.reduce((sum, element) => sum + element)
console.log("sum:", sum);

// sum of all the even numbers

let evenSum = array.filter(x => x%2===0)
                   .reduce( (sum, x) => sum+x)
console.log("Even sum:",  evenSum);