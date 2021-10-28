let dvBox = document.getElementById("square");
dvBox.style.backgroundColor = "#000000";
dvBox.style.width = "100px";
dvBox.style.height = "100px";

function box(){
    let divWidth = dvBox.offsetWidth + (0.5 * dvBox.offsetWidth)+"px";
    let divHeight = dvBox.offsetHeight + (0.5 * dvBox.offsetHeight)+"px";
    dvBox.style.width = divWidth;
    dvBox.style.height = divHeight;
}