function setup(){
    createCanvas(400,400)
}
let myCircle = {
    x: 30, y:45, 
    velocityX: 1, velocityY: 1,
    color:"blue",
    update: function(){
        fill(this.color);
        circle(this.x, this.y, 60);
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}
function draw(){
    myCircle.update();
}