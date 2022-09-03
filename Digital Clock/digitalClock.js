function currentTime() {
    var date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = (hour < 10)? "0" + hour : hour ;
    min = (min < 10)? "0" + min : min ;
    sec = (sec < 10)? "0" + sec : sec ;
    
    document.getElementById("clock").innerHTML = (hour + " : " + min + " : " + sec); /* adding time to the div */
    
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

currentTime();