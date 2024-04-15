let b1;
let b2;
let b3;
let b4;
let b5;
let b6;
let b7;
let b8;

function setup() {
  createCanvas(windowWidth,windowHeight); //hereafter 'width' height
  background("#AB91BB");
  frameRate(5);
  colours=["#004DFF", "#FF0000", "yellow", "#08FF00", "#BD00FF", "#FF00AA"];
}


function draw() {
  //background
  b1= random(0,100);
  b2= random(0,100);
  b3= random(0,100);
  b4= random(0,100);
  b5= random(0,100);
  b6= random(0,100);
  b7= random(0,100);
  b8= random(0,100);
  triangle(width/b1, height/b2, width/b3, height/b4, width/b5, height/b6, width/b7, height/b8)
  
  
  
  //eyes
  fill("#4C777D");
  stroke("#4C777D");
   ellipse(width/2, height/2, width/3, height/1.1);
  fill("#FFFFFF");
  circle(650,200,100);
  fill("#FFFFFF");
  circle(850,200,100);
  fill("#FF0093");
  circle(650,215,70);
     fill("#FF0093");
  circle(850,215,70);
   fill("#000000");
     stroke("#FF0000");
  circle(650,215,10);
   fill(0);
   stroke("#FF0000");
  circle(850,215,40);
  //nose
    fill("#C4E5D9");
     stroke("#C4E5D9");
  rect(725,150,50, 300)
   
  //mouth
  fill("#000CFF");
     stroke("#000CFF");
  ellipse(width/2, 600, 200, 50);
  
  //teeth
  fill("#FF5709");
  stroke("#FFB809");
  rect(600,500,300, 50);
}
