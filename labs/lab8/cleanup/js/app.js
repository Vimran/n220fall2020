let userInput = document.getElementById("userInput");
let dvResult = document.getElementById('dvResult');

function deleteHash(){
    let myString = userInput.value;
    let myNewString = myString.replace(/#/g, "");
    dvResult.innerText = myNewString;
}