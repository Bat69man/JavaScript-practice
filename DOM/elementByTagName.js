
document.getElementById("color").addEventListener("click", changeColor);
function changeColor(){
    tags = document.getElementsByTagName("p");
    for(let i=0; i<tags.length; i++){
        tags[i].style.color = "red";
    }
}

document.getElementById("size").addEventListener("click", changeSize);
function changeSize(){
    tags = document.getElementsByTagName("p");
    for(let i=0; i<tags.length; i++){
        tags[i].style.fontSize = "25px";
    }
}