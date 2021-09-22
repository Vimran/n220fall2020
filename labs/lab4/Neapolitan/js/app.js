function setup(){
    createCanvas(300,300);
}

function draw(){
    var colors = ["#32a852", "#54cff7", "#f754df"]

    for(let i = 0; i < colors.length; i++){
        fill(colors[i]);
        rect(40 + 50*i, 150, 50, 50);
    }
}