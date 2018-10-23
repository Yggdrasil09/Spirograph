var x=300,y=300;

var x1,y1;

var ang=0;
var ang1=0;

var path=[];

function setup()
{
    var canvas=createCanvas(600,600);
    canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
    background(0);
    ang=angle1;
    ang1=angle2;
    path=[];
}

function draw()
{
    background(0);
    stroke(255);
    fill(0);
    ellipse(x,y,300,300);
    x1=x+100*cos(ang);
    y1=y+100*sin(ang);
    ellipse(x1,y1,100,100);
    line(x1,y1,x1+150*cos(ang1),y1+150*sin(ang1));
    path.push(createVector(x1+150*cos(ang1),y1+150*sin(ang1)));
    ang+=0.02;
    ang1+=0.03;
    for(var i=0;i<path.length;i++)
    {
        point(path[i].x,path[i].y);
    }
}