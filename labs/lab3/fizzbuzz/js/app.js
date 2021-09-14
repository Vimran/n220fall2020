function setup(){
    createCanvas(1000, 1000)
}

function draw(){
    background(100);
    let b = 100;
    for(var i = 0; i < 25; i++){
        let a = i*50;
        if(i % 3 == 0 && i % 5 == 0){
            fill("blue");
            square(a, b, 50);
        } else if( i % 3 == 0){
            fill("purple");
            ellipse(a+25, b+25, 50, 50);
        } else if (i % 5 == 0){
            fill("green");
            square(a, b, 50);
        } else{
            fill("black");
            ellipse(a+25, b+25, 50, 50);
        }
    }
    
}