let red = 0;
let green = 0;
let blue = 0;
document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
function redOne(){
    red += 1;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function redFive(){
    red += 5;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function redTen(){
    red += 10;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function greenOne(){
    green += 1;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function greenFive(){
    green += 5;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function greenTen(){
    green += 1;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function blueOne(){
    blue += 1;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function blueFive(){
    blue += 5;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}
function blueTen(){
    blue += 10;
    document.getElementById("colorDisplay").style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("rgbValue").innerHTML = `${red},${green},${blue}`;
}

