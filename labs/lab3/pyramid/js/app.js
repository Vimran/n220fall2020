function setup(){
    createCanvas(400, 300);
    background(0);

    let a = 0;
    let b = 0;
    
    for(x=0; x<5; x++){
        for(y=0; y<x; y++){
            fill("red");
            rect(a, b, 50, 50);
            a = a + 55;
        }
        a=0;
        b = b + 55;
    }

}

