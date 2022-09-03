let timerId;
let seconds = 0;

document.getElementById("start").onclick = () => {
    let target = document.getElementById("target");
    timerId = setInterval(function(){
        target.innerHTML = ++seconds;
    }, 1000)
}

document.getElementById("stop").onclick = () => {
    clearInterval(timerId);
}