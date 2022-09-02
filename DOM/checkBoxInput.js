document.getElementById("checkAll").addEventListener("click", checkAll);
document.getElementById("uncheckAll").addEventListener("click", uncheckAll);

var serFlavours = new Set;
var result = document.getElementById("result");

function checkAll(){
    let flavours = document.getElementsByName("flavours");
    for(let i of flavours){
        i.checked = true;
        serFlavours.add(i.value);
    }
    printFlavours();
}
function uncheckAll(){
    let flavours = document.getElementsByName("flavours");
    for(let i of flavours){
        i.checked = false;
        serFlavours.delete(i.value);
    }
    printFlavours();
}

function printFlavours(){
    result.innerHTML = "";
    for(let i of serFlavours.values()){
        result.innerHTML += "<br>" + i;
    }
}

function addOrRemoveFlavour(flavour){
    if(serFlavours.has(flavour)){
        serFlavours.delete(flavour)
    }
    else{
        serFlavours.add(flavour)
    }
    printFlavours()
}