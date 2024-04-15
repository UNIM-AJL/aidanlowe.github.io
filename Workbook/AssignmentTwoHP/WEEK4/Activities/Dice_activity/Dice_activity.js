let dice1;
let dice2;
let dice3;
let dice4;
let dice5;
let dice6;
let dice7;
let dice8;
let dice9;
let dice10;
let dice11;
let dice12;
let dice13;


function setup() {
  createCanvas(windowWidth,windowHeight); //hereafter 'width' height
  fill(255,0,0);
  frameRate(5);
  colours=["#004DFF", "#FF0000", "yellow", "#08FF00", "#BD00FF", "#FF00AA"];
  shapes= ["circle", "square", "line"];
}


function draw() {
  dice1=random(1,6);
  dice2=random(1, 6);
  dice3=random(1,10);
  dice4=random(1,10);
  dice5=random(1,10);
  dice6=random(1,10);
  dice7=random(1,10);
  dice8=random(1,10);
  dice9=random(1,10);
  dice10=random(1,10);
  dice11=random(1,10);
  dice12=random(1,10);
  dice13=random(1,10);
  fill(random(colours));
  circle(width/dice3, height/dice4, width/dice5);
  stroke(random(colours));
  line(width/dice7, height/dice8, width/dice9, height/dice10);
  fill(random(colours));
  square(width/dice11,height/dice12, width/dice13);
}
