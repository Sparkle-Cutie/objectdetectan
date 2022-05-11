image = "";
status = "";
function preload(){
    img = loadImage("lalala.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("darkorchid");
    text("Tiger", 45, 75);
    noFill();
    stroke("deeppink");
    rect(30, 60, 250, 350);
    fill("darkorchid")
    text("Lion", 320, 120);
    noFill();
    stroke("deeppink");
    rect(300, 90, 400, 320);
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

