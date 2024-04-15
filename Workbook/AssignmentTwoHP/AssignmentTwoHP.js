
var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width/1, height/1);
}


function draw() {
  // capture = createCapture(VIDEO);
  // capture.size(width/1, height/1);

// code from https://editor.p5js.org/Pole/sketches/XK-pRY4Tk
// code has been edit in regards to size, colour and pixelisation
  capture.loadPixels();
    var stepSize = floor(map(mouseX, 0, width, 10, 60));
    for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
    var index = ((y*capture.width) + x) * 4;
    var redVal = capture.pixels[index];
    var greenVal = capture.pixels[index + 1];
    var blueVal = capture.pixels[index + 2];
    noStroke();
    fill(redVal, greenVal, 2*blueVal);
    rectMode(CENTER);
    rect(x, y, stepSize, stepSize);
  }
}
}
