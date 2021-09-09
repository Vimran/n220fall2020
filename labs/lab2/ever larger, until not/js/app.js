var x = 0;
function setup(){
    createCanvas(400, 400)
}
function draw(){
    background(0);
    x = x + 1;
    if(x<200){
       circle(200, 200, x);
    }else{
       circle(200, 200, 1);
    }
}