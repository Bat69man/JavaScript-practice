function getGender1(){
    let result = document.getElementById("result");
    result.innerHTML = "";

    // manually checking one by one
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    
    if(male.checked === true){
        result.innerHTML = "Gender: " + male.value
    }
    else if(female.checked === true){
        result.innerHTML = "Gender: " + female.value
    }
}

function getGender2(){
    let result = document.getElementById("result");
    result.innerHTML = "";

    // using querySelector
    let gender = document.querySelector("input[name=gender]:checked").value;

    result.innerHTML = "Gender: " + gender
}

function getGender3(){
    let result = document.getElementById("result");
    result.innerHTML = "";

    // by looping through array using for-of loop
    let gender = document.getElementsByName("gender");
    for(let i of gender){
        if(i.checked){
            result.innerHTML = "Gender: " + i.value;
            break;
        }
    }
}

function getGender4() {
    let result = document.getElementById("result");
    result.innerHTML = "";

    // by looping through array using index
    var gender = document.getElementsByName('gender');

    for(let i=0; i<gender.length; i++) {
        if(gender[i].checked){
            result.innerHTML = "Gender: "+gender[i].value;
            break;
        }
    }
}