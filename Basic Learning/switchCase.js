let day = "Monday"
console.log()

switch(day){
    case "Monday":
        console.log("7am")
        break
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4am")
        break
    case "Friday":
        console.log("9am")
    case "Saturday":
    case "Sunday":
        console.log("8am")
        break
    default:
        console.log("Invalid day")
}