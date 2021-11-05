let dvResult = document.getElementById("dvResult");
function generateNumber(){
    randomNumber();
}
function randomNumber(){
    var x = Math.floor(Math.random() * 10 + 1);
    //console.log(x);
    dvResult.innerHTML = x;
    return dvResult;
}