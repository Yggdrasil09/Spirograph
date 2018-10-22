var x=300,y=300;
var x1,y1;
var ang=0;

function setup()
{
    var canvas=createCanvas(600, 600);
    canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
    background(0);
}

function draw()
{
    fill(0);
    strokeWeight(2);
    stroke(255);
    ellipse(x,y,200,200);
    x1=x+200*cos(ang)+200*sin(ang);
    y1=y+200*cos(ang)-200*sin(ang);
    ellipse(x1,y1,100,100);
    ang+=0.1;
}