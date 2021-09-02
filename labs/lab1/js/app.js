function setup(){
    createCanvas(800, 600);

    let a=200;
    let b=150;

    fill("#f6fa78");
    rect(10, 30, 380, 350);

    fill("#6e3e3a");
    circle(300, b, 45);
    circle(98, b, 45);

    ellipse(a, a, 230, a);
    ellipse(a, 259, 100, 80);

    fill("#4d211e")
    ellipse(a, 255, 40, 30);

    fill("black");
    ellipse(230, 213, 15, 20);
    ellipse(170, 213, 15, 20);

    strokeWeight(2);
    line(a, 270, a, 300);


}