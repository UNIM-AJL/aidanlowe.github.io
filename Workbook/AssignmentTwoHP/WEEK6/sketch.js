//code from https://p5js.org/examples/typography-text-rotation.html
//code edited in regards to position, speed, size, font 
let angleRotate = 0.0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  }



function draw() {
  background(0);

  strokeWeight(1);
  stroke(153);
  textSize(170);
  push();
  translate(250, 520);
  rotate(radians(angleRotate));
  text(int(angleRotate) % 360 + " DEGREES ", 20, 0);
  line(0, 0, 1170, 0);
  pop();
  
  angleRotate += 0.50;

  stroke(255, 0, 0);
  strokeWeight(10);
  point(250, 520);
}

function segment(c,w,x,y,a){
  push();
  translate(x, y);
  rotate(a+PI);
  //line(0, 0, -w, 0);
  //ellipse(0,0,10,10);
  
  text(c,0,0);
  
  //pg.text(c,0,0);
  pop();
}



