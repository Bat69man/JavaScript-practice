
document.getElementById('form').addEventListener('submit', (e) => {
    let username = document.getElementById('uname').value.trim()
    let password = document.getElementById('pass').value.trim()
    let errorContainer = document.getElementById('error')
    let errors = []

    if(username === "" || username === null){
        errors.push('Username is *requried')
    }
    if(password === "" || password === null){
        errors.push('Password is *requried')
    }
    else if(password.length < 5){
        errors.push('Password should be longer than 5 characters')
    }
    else if(password.length > 20){
        errors.push('Password should NOT be longer than 20 characters')
    }
    if(password.toLowerCase() === "password"){
        errors.push("Password should not be 'password'")
    }
    if(errors.length > 0){
        errorContainer.innerText = errors.join('\n');
        errorContainer.style.visibility = "visible";
        e.preventDefault();
    }
    else{
        errorContainer.style.visibility = "hidden";
    }
})