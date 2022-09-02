function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10){
        return "0" + k;
    }
    else{
        return k;
    }
}

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    
    document.getElementById("clock").innerHTML = (hour + " : " + min + " : " + sec); /* adding time to the div */
    
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

currentTime();