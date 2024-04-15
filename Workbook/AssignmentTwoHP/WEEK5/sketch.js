function preload(){
  img=loadImage("W5.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background("#F5018A");
  // background(0,0,255)

   // light code referenced from https://p5js.org/examples/3d-multiple-lights.html
  let locX = mouseX - height/2;
  let locY = mouseY - width/2;
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  // Code from https://p5js.org/examples/3d-geometries.html
  // code has been edit in regards to size, colour, materials, object (e.g.adding my own created images) positioning and lighting 
  normalMaterial();

  push();
  translate(450, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("#C4F500")
  cylinder(100, 150);
  pop();

  push();
  translate(-450, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("#C4F500")
  cone(100, 200);
  pop();

  push();
  translate(0, 0, 0);  
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("#C4F500")
  torus(100, 50);
  pop();

  push();
  translate(0, -100, 0); 
  rotateZ(frameCount * 0.01); 
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("#C4F500")
  image(img,100,100, 500, 500/img.width*img.height);
  pop();
}
