let timerId;

function set_Timeout(self, seconds){
    let target = document.getElementById("target");
    self.disabled = true;
    timerId = setTimeout(function(){
        self.disabled = false;
        target.innerHTML = seconds+" seconds have passed";
    }, seconds*1000)
}

document.getElementById("stop").onclick = () => {
    clearInterval(timerId);
    document.getElementById("start").disabled = false;
}