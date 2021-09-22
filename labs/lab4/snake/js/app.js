let locationX = [0,0,0,0,0,0,0,0,0,0];
let locationY = [0,0,0,0,0,0,0,0,0,0];
function setup(){
    createCanvas(400,400);

}
function draw(){
    background("purple")
    console.log(locationX);
    console.log(locationY);
    locationX.push(mouseX);
    locationX.shift();
    locationY.push(mouseY);
    locationY.shift();
    
    for(var i=0; i < locationX.length && i < locationY.length ; i++){
        circle(locationX[i], locationY[i], 50, 20);
    }

    
}