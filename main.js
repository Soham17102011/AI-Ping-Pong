function setup() {
    canvas = createCanvas(650, 400);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(650, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded() {
    console.log("model's loaded!!!!!!!!");
}

function draw() {
    image(video, 0, 0, 650, 400);
}