
let amp;
let vol;

let volumes = [];

function preload(){
  sound = loadSound("A Rose Blooms In Chaos (With subtitles).mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    sound.play();

  amp = new p5.Amplitude();
}

function draw() {
  background(0);

  if (sound.isPlaying()){  
    vol= amp.getLevel();
    console.log(vol);
    volumes.push(vol);
  }

  
  beginShape();
  for(let i= 0; i < volumes.length; i++){
    
    strokeWeight(3);
    let mapVolumes= map(volumes[i],0, 1, height, 0);
    // point(i, mapVolumes);
    fill('black');
    strokeWeight(1);
    stroke(255, 255, 255);
    vertex(i, mapVolumes);
  }
  endShape();

  if(volumes.length > width){
    volumes.splice(0,1);
    }
}
