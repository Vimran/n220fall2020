let letters = ["a", "b", "c", "d"];
function setup(){
    createCanvas(400, 400);
}
function draw(){
    background(100);
    for(let i = 0; i < letters.length; i++){
        console.log(letters[i]);
        if(letters[0]){
            rect(325, 2, 60, 60);
            fill("black");
        } else if(letters[1]){
            circle(3, 2, 20, 20);
            fill("red");
        } else{
            ellipse(200, 200, 20, 20);
            fill("blue");
        }
    }
}
