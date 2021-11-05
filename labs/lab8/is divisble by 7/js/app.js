let dvResult = document.getElementById("dvResult");
var numberInput = document.getElementById("numberInput");
var divideResult;

function updateDiv(){
    divide();
    if(divide() === true){
        dvResult.innerHTML = "This number is divisible by 7";
    } else {
        dvResult.innerHTML = "This number is not divisible by 7";
    } 
}
function divide(){
    let x = numberInput.value;
    if(x % 7 === 0){
        return true;
        //console.log("Yes");
    } else{
        return false;
        //console.log("No");
    }
}