
// Start code https://editor.p5js.org/jht1493/sketches/u5jptPqVU
// Code has been changed and alter from original code
// Eye tracking with posenet

let video;
let poseNet;
let poses = [];

function preload(){
  img=loadImage("eyes2.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select("#status").html("Model Loaded");
}

function draw() {
  image(video, 0, 0, width, height);
    background('#A39D96');
    translate(width,0);
    scale(-1, 1);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  // drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    {
      let x = pose.leftEye.x;
      let y = pose.leftEye.y;
      // strokeWeight(0);
      // fill(255);
      // image(img,x, y, 400, 180);
      // fill(0,255,0);
      // circle(x, y, 20, 20);
      // fill(0);
      // circle(x, y, 10, 10);
    }
    {
      let x = pose.rightEye.x;
      let y = pose.rightEye.y;
      image(img,x, y, 400, 180);
      // strokeWeight(0);
      // fill(255);
      // ellipse(x, y, 100, 20);
      // fill(0,255,0);
      // circle(x, y, 20, 20);
      // fill(0);
      // circle(x, y, 10, 10);
    }
  }
}

