
function object(obj){
    var div = document.createElement("div");
    div.innerText = "O";
    div.style.backgroundColor = obj.color;
    document.body.appendChild(div);
}
function makeOs(){
    let objects = [
        { color: "#FFFFFF"}, 
        { color: "#FFFFFF"}, 
        { color: "#FFFFFF"} 
    ];
    for(i=0; i<objects.length; i++){
        object(objects[i]);
    }
}
