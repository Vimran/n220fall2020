function colorChanger(change){
    var square = document.getElementById(change.id);
    square.style.backgroundColor = square.dataset.color;
}