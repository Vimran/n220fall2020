let guess = document.getElementById("guess");
let dvResult = document.getElementById("dvResult");
var x = Math.floor(Math.random() * 20 + 1);


function guessNumber(){
    let y = guess.value;
    if(y == x){
        dvResult.innerHTML = "Correct";
    } else if ( y < x ){
        dvResult.innerHTML = "Try a higher number"
    } else {
        dvResult.innerHTML = "Try a lower number"
    }
    guess.value = "";
    
}

