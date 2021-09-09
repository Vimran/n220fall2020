function setup(){
    createCanvas(400,300);
}
function draw(){
    background(0);
    if(mouseX>200){
        fill("red");
    } else{
        fill("blue");
    }
    ellipse(mouseX, mouseY, 20, 20);
 }