
let amp;
let vol;

let volumes = [];

function preload(){
  sound = loadSound("Buggin' Out.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    sound.play();

  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  text('')

  if (sound.isPlaying()){  
    vol= amp.getLevel();
    console.log(vol);
    volumes.push(vol);
  }

  let mapVol= map(vol, 0, 1, 0, height);
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(210, 520, mapVol*5);
  
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(230,520, mapVol*4.5);
    
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(250,520, mapVol*4);
  
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(270,520, mapVol*3.5);
  
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(290,520, mapVol*3);
    
  fill('black');
  stroke('red');
  strokeWeight(1);
  circle(310,520, mapVol*2.5);
      
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(330,520, mapVol*2);

  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(350,520, mapVol*1.5);

  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(370,520, mapVol*1);
 
  fill('black');
  stroke('white');
  strokeWeight(1);
  circle(390,520, mapVol*.5);

  // textSize(42);
  // stroke('red');
  // strokeWeight(1);
  // fill('red')
  // text('Progess',370,520);

  if(volumes.length > width){
    volumes.splice(0,1);
    }

   
}
