document.getElementById("flavours1").onchange = 
function change(){ 
    // for single select drop down
    document.getElementById("result1").innerHTML = document.getElementById("flavours1").value;
}

document.getElementById("flavours2").addEventListener("change", addMultiple);
function addMultiple(){
    // for multi select drop down
    let flavours = document.getElementById("flavours2");

    let result = document.getElementById("result2");
    result.innerHTML = "";
    
    for (let i of flavours.options) {
        if (i.selected === true)
            result.innerHTML += `${i.value} <br>`;
    }
}