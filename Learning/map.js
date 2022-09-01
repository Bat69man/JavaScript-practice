/*
    W3: https://www.w3schools.com/js/js_object_maps.asp

    Map is a key and value pair data structure.
    In map, every value will have a key
    Each key will be uniqe.
    Values can be null and duplicate, but not key.
    String , numbers, object, anything can be a key
*/

let student = new Map();

student.set(33, "Dharmil Shah");
student.set(33, "Dhamudi"); // value of key:33 will be changed :(
student.set(29, "Brijesh Prajapati");
student.set(41, "Bhargav Trivedi");
student.set(12, "Umang Gohel");

// printing all the keys
console.log( student.keys() );

// printing all the values
console.log( student.values() );

// has() method check wether the key exists in map or not
console.log( student.has(33) ); // true

// get() method check for the key and returns the value of that key. undefined if does not exist
console.log( student.get(33) ); // Dharmil Shah
console.log();

// forOf loop fetches whole entry(key & value)as array, keys as well as values accordingly
for( let entry of student){
    //console.log( entry ); // whole entry
    console.log( entry[0] + ": " + entry[1] ); // individual key-value
}
// another way to get key-value pair in different variables
for( let [key, value] of student){
    console.log(key+" -> "+value);
}

// getting only keys
for( let key of student.keys()){
    console.log(key);
    // console.log(student.get(key)); // getting value from key
}
// getting only values
for( let value of student.values()){
    console.log(value);
}

// using forEach(). it returns value and key on 1st & 2nd index accordingly.
student.forEach( (value, key) => { console.log(key+" => "+value) } );

// for-in loop fetches the nothing. We have to use keys()/values() methods
for( let key in student){
    console.log( key );
}