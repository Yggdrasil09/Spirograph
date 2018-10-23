var x=300,y=300;
var x1,y1;
var x2,y2;

var ang=0;
var ang1=0;
var path=[];

function setup()
{
    var canvas=createCanvas(600, 600);
    canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
    background(0);
    ang=float(angle1);
    ang1=float(angle2);
    path=[];
}

function draw()
{
    ellipse(x,y,600,600);
    stroke(0);
    strokeWeight(2);
    x1=300+225*sin(ang);
    y1=300-225*cos(ang);
    ellipse(x1,y1,150,150);

    x2=x1+50*sin(ang1);
    y2=y1-50*cos(ang1);

    ellipse(x2,y2,50,50);
    path.push(createVector(x2,y2));
    point(x1,y1);
    strokeWeight(3);

    ang+=0.06;
    ang1+=0.1;

    for(var i=0;i<path.length;i++)
    {
        point(path[i].x,path[i].y);
    }
}