function preload(){
  img=loadImage("Activities.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
}

function draw() {
  image(img,mouseX-50,mouseY-50, 100, 100/img.width*img.height);;
}


function keyPressed(){
  background(255,255,255);
  //fill(random(255),0,0);
  }
  