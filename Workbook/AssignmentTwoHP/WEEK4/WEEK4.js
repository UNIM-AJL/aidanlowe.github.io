var myFont;

function preload(){
  img=loadImage("ChromeTextW4.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
  //myFont = loadFont('Data/Redaction50-8Mg4n.otf');   
}


function draw() {
  //textFont(myFont);
  // text("WEEKFOUR",mouseX-30,mouseY); 
  image(img,mouseX-50,mouseY-50, 100, 100/img.width*img.height);
}

function keyPressed(){
background(255,255,255);
//fill(random(255),0,0);
}
