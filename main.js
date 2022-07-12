status = "";
store = "";

function preload(){
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    store = document.getElementById("input").value ;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error, results){
    if (error) {
        console.log(error);
        objects = results;
    }
    console.log(results);
}
function draw() {
    image(video, 0, 0, 480, 380);
    if(objects[i].label == object_name)
    {
        objectDetector.detect(gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("object_status").innerHTML = object_name + " Found";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].confidence * 100);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].height);
        }
    }
}