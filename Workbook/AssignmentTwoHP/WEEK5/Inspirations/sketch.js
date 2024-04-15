function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background("#F5018A");
  // background(0,0,255)

  let locX = mouseX - height/2;
  let locY = mouseY - width/2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  normalMaterial();

  push();
  translate(0, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("#C4F500")
  box(400, 400, 400);
  pop();
}
