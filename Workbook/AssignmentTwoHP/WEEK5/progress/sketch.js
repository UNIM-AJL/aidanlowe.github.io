function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background("#F5018A");

  let locX = mouseX - height/2;
  let locY = mouseY - width/2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  // Code from https://p5js.org/examples/3d-sine-cosine-in-3d.html
  // code edited in regards to scale, object used, positioning and speed (also the addition of lighting)
  normalMaterial();
  fill("#C4F500");
  rotateY(frameCount * 0.01);
  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 200,
        sin(frameCount * 0.001 + j) * 200,
        i * 0.1
      );
      rotateZ(frameCount * 0.0005);
      push();
      torus(10, 5);
      // ellipsoid(17, 15, 20);  
      pop();
    }
    pop();
  }
}

function keyPressed(){
  background('white');
  fill("#C4F500");
  rotateY(frameCount * 0.01);
  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 200,
        sin(frameCount * 0.001 + j) * 200,
        i * 0.1
      );
      rotateZ(frameCount * 0.0005);
      push();
      // torus(10, 5);
      ellipsoid(17, 15, 20);  
      pop();
    }
    pop();
  }
}

