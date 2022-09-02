/*
    W3: https://www.w3schools.com/js/js_object_sets.asp

    set is a class in JS. it's a data structure.
    set is a collection which only stores unique values.
    it does not have the index values.
*/

let stringSet = new Set("bookkeeper");
console.log(stringSet);

let nums = new Set();
nums.add("Dharmil");
nums.add(null);     // set can contain a null value
nums.add(null);     // ignored
nums.add(33);
nums.add(33.3);
nums.add(33);       // ignored
nums.add("Shah");

console.log(nums);

for(let element of nums){
    console.log(element);
}

console.log( nums.has(3) ); // has() check wether array contains that element or not
console.log( nums.has(33) );