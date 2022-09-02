
document.getElementById("color").addEventListener("click", changeColor);
function changeColor(){
    elements = document.getElementsByClassName("color");
    for(let i=0; i<elements.length; i++){
        elements[i].style.color = "red";
    }
}

document.getElementById("size").addEventListener("click", changeSize);
function changeSize(){
    elements = document.getElementsByClassName("size");
    for(let i=0; i<elements.length; i++){
        elements[i].style.fontSize = "25px";
    }
}