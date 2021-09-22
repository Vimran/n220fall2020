var rectAB = [];
function setup(){
    createCanvas(400, 400)
}
function draw(){
    background("pink");
    noStroke();
    for (var i=0; i < rectAB.length; i++ ){
        fill(rectAB[i][2]);
        rect(rectAB[i][0], rectAB[i][1], 100, 50);
        rectAB[i][1] += 1;
    }
}
function mousePressed(){
    rectAB.push([mouseX, mouseY, random("white")]);
}

console.log(rectAB);