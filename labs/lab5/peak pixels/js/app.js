let dvBox = document.getElementById("square");
dvBox.style.backgroundColor = "#00FF00";
dvBox.style.width = "100px";
dvBox.style.height = "100px";

function box(){
    let divWidth = dvBox.offsetWidth + (0.1 * dvBox.offsetWidth)+"px";
    let divHeight = dvBox.offsetHeight + (0.1 * dvBox.offsetHeight)+"px";
    dvBox.style.width = divWidth;
    dvBox.style.height = divHeight;
}