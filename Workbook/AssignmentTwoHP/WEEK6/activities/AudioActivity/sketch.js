let sound;
let button;

let amp;
let vol;

let volumes = [];

function preload(){
  sound = loadSound("The Carnival of the Animals - III. Swift Animals.mp3");
}

function setup() {
  createCanvas(windowWidth, 600);
  button = createButton("PLAY");
  button.mousePressed(toggle);

  amp = new p5.Amplitude();
}

function draw() {
  background(255);

  if (sound.isPlaying()){  
    vol= amp.getLevel();
    console.log(vol);
    volumes.push(vol);
  }


  let mapVol= map(vol, 0, 1, 0, height);
  fill('black');
  stroke('lime');
  strokeWeight(4);
  circle(width/2, height/2, mapVol*2);
  
  fill('blue');
  stroke('red');
  strokeWeight(4);
  circle(width/1.5, height/1.5, mapVol);
  
  beginShape();
  for(let i= 0; i < volumes.length; i++){
    
    strokeWeight(3);
    let mapVolumes= map(volumes[i],0, 1, height, 0);
    point(i, mapVolumes);
    fill('pink');
    strokeWeight(1);
    stroke(0, 0, 255);
    vertex(i, mapVolumes);
  }
  endShape();

  if(volumes.length > width){
    volumes.splice(0,1);
    }
}


function toggle(){
  if (!sound.isPlaying()){
    sound.play();
    button.html("PAUSE");
  } else if (sound.isPlaying()){
    sound.pause();
    button.html("PLAY");
  }
}