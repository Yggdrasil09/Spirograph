var x=300,y=300;
var x1,y1;
var ang=0;
var x2,y2;
var ang1=0;

function setup()
{
    var canvas=createCanvas(600, 600);
    canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
    background(255);
}

function draw()
{
    background(0);
    strokeWeight(2);
    stroke(0);
    ellipse(x,y,200,200);
    x1=x+100*sin(ang);
    y1=y-100*cos(ang);
    ellipse(x1,y1,100,100);
    x2=x1+50*sin(ang1);
    y2=y1-50*cos(ang1);
    ellipse(x2,y2,50,50);
    ang+=0.03;
    ang1+=0.06;
}