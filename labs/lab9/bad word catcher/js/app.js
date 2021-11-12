function catchBadWord(){
    var userInput = document.getElementById("userInput").value;

    var arr = userInput.split(" ");
    var badWords = ["clear", "water", "tires"];
    var badWordsFound = arr.filter(el => badWords.includes(el));

    document.getElementById("wordCaught").innerHTML = badWordsFound.join(", ");
    document.getElementById("wordAmount").innerHTML = badWordsFound.length;
}
