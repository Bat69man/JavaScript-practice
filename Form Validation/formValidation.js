function emptyLabel(label){
    label.innerHTML = "";
}

function validateUsername(uname, label){
    if(uname.value == ""){
        label.innerHTML = "*requried";
    }
    else if(uname.value.match("^[a-zA-Z]") == null){
        label.innerHTML = "must starts with a letter";
    }
    else if(uname.value.match("[^a-zA-Z0-9_]") != null){
        label.innerHTML = "should only contain letters, digits and underscore(_)";
    }
    else{
        return true;
    }
    return false;
}

function validateEmail(email, label){
    let emailRegex = /^[a-z][a-zA-Z0-9\.-_]+@[a-z]+\.[a-z]$/gm;
    //flag /m declares '^' and '$' as start and end of line in regex
    if(email.value == ""){
        label.innerHTML = "*requried";
    }
    else if( !(emailRegex.test(email.value)) ){
        label.innerHTML = "invalid email format"
    }
    else{
        return true;
    }
    return false;
}

function validatePassword(pass, label){
    if(pass.value == ""){
        label.innerHTML = "*requried";
    }
    else if(pass.value.length < 8){
        label.innerHTML = "must contain atleast 8 characters";
    }
    else if( !(/[a-z]/.test(pass.value))
        || !(/[A-Z]/.test(pass.value))
        || !(/[0-9]/.test(pass.value))){
            // flags /g=global /i=insensitive
        label.innerHTML = "must contain atleast one capital letter, small letter, digit";
    }
    else{
        return true;
    }
    return false;
}

document.getElementById("loginForm").onsubmit = () => {
    let uname = document.getElementById("uname");
    let pass = document.getElementById("pass");
    let email = document.getElementById("email");

    let labelUname = document.getElementById("labelUname");
    let labelPass = document.getElementById("labelPass");
    let labelEmail = document.getElementById("labelEmail");

    uname.value = uname.value.trim();
    pass.value = pass.value.trim();
    email.value = email.value.trim();

    labelEmail.innerHTML = labelPass.innerHTML = labelUname.innerHTML = "";

    if (validateUsername(uname, labelUname)
    && validateEmail(email, labelEmail)
    && validatePassword(pass, labelPass)) {
        return true;
    }
    return false;
}