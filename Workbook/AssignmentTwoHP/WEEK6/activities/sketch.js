// Code from  https://www.youtube.com/channel/UC4g7NopwjnN2pDRRb5y_wHQ
// code has been deconstructed and re-arranged to create new effect different from the intended effect of the orginal code



function preload(){
    song = loadSound("Baxter - RAMBO.mp3")
    playing = false
    song.onended(() => {playing = false; document.getElementById("audio").innerText = "play."; a = 0})
    fr = 60
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    layer = createGraphics(width, height)
    
    background('black')
    
    fft = new p5.FFT(0, 256);
    
    a = 360/((song.duration()) * fr)
    b = a
    
    frameRate(fr)
    
    
    //layer.clear()
  }
  
  function draw() {
    
    background(0);
      
    layer.noFill()
    layer.colorMode(RGB)
    
    var spectrumA = fft.analyze()
    var spectrumB = spectrumA.reverse()
    spectrumB.splice(0, 40)
    
    push()
    translate(758, -25)
    noFill()
    stroke(255)
    
    
    beginShape()
      
      for(let i = 0; i < spectrumB.length; i++){
        var amp = spectrumB[i]
        var x = map(amp, 0, 256, -750, 500)
        var y = map(i, 0, spectrumB.length, 30, 770)
        
        vertex(x, y)
      }
    endShape()
    
    pop()


    push()
    translate(758, -25)
    noFill()
    stroke(255)
    
    
    beginShape()
      
      for(let i = 0; i < spectrumB.length; i++){
        var amp = spectrumB[i]
        var x = map(amp, 0, 256, 750, -500)
        var y = map(i, 0, spectrumB.length, 30, 770)
        
        vertex(x, y)
      }
    endShape()
    
    pop()
    
   
    
    if(playing)a += b
    
  }
  
  function toggleAudio(){
    if(!playing){
      song.play()
      console.log("playing")
      document.getElementById("audio").innerText = "pause."   
    }
    else{
      song.pause()
      console.log("pasued")
      document.getElementById("audio").innerText = "play."
    }
    
    playing = !playing
  }
