let myShape = {
    x: 15, y: 20, width: 40, height: 40,
    color: "#000000",
    update: function(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height)
    }
}

function draw(){
    myShape.update();
}