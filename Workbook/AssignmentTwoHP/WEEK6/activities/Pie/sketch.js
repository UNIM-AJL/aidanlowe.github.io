let imac = 366.28 * (360/ 436.77);
let iphone = 63.3 * (360/ 436.77); 
let icloud= 5 * (360/ 436.77); 
let googleDrive= 2.19 * (360/ 436.77); 

let storageData = [imac, iphone, googleDrive, icloud];

function setup(){
    createCanvas(400,400);
    totalData = imac + iphone + icloud + googleDrive;
    mapTotal= map(totalData, 0, totalData, 0, 360);
    noLoop()
}

function draw(){
    createChart(storageData, 300)
}

function createChart(data, diameter){
    let lastPiece= 0;
    for (let i= 0; i < data.length; i++){
        let randColor = color(random (255), random (255), random (255));
        fill(randColor);
        arc(
            width/ 2,
            height/ 2,
            diameter,
            diameter,
            lastPiece,
            lastPiece + radians(storageData[i])
        );
        // let midAngle = lastPiece + radians(storageData[i]/2);
        lastPiece += radians(storageData[i]);
    }
}