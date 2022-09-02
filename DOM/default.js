let id  = 33
let name = 'Dharmil Shah'
let result = 83.3
let pass = true

document.getElementById("text").innerHTML = document.baseURI;

let student = {
    name: "Dharmil Shah",
    id: 33,
    result: 83.3,
    pass: true,
    languagePreference: "Java",
}

function Student(id, name, result, pass, languagePreference){
    this.id = id
    this.name = name
    this.result = result
    this.pass = pass
    this.languagePreference = languagePreference
}

let dharmil = new Student(33, 'Dharmil Shah', 83.3, true, 'Java')

console.log(typeof dharmil);