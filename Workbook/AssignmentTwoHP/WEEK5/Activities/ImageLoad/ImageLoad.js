var img;
var img2;

function preload(){
  img=loadImage("data/flipOff.jpg");
  img2=loadImage("data/ClosedFolder.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  //background(255,255,255,1);
  if (mouseIsPressed){image(img,mouseX-50,mouseY-50, 100, 100/img.width*img.height);
  } else {
  image(img2,mouseX-50,mouseY-50, 100, 100/img.width*img.height);
  }
}
