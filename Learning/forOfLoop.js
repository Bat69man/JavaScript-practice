// forOf loop is used to iterate elements of the array one by one

let nums = []
nums[0] = 33
nums[10] = 52

console.log(nums);

// gives each element in 'i'
for(let i of nums){
    console.log(i);     // 33 , ...<undefined>... , 52
}

// instead of elemets, it will return the index numbers of the array elements as a 'key'.
for(let key in nums){
    console.log(key);   // 0, 10
    //console.log(numd[key]); // can be used to fetch elemets one by one
}