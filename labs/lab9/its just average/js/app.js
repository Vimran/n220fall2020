var userInput = document.getElementById("userInput");
var Answer = document.getElementById("Answer");
function calculateAverage(){
    var txtinput = userInput.value;
    var arr = txtinput.split(",");
    var sum = 0;
    var average = 0; 

    for(i=0; i < arr.length; i++){
        sum += Number(arr[i]);
        average = sum/arr.length;
    }

    console.log(average);
    Answer.innerHTML = "Sum: " + sum + " " + "Average: " + average;
    userInput.value = "";
}