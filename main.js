shapeSize = 0;
leftWristx = 0;
rightWristx = 0;
nosex = 0;
nosey = 0;
function preload() {}
function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.position(50, 245);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log('nose X =' + nosex + 'nose Y =' + nosey);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        shapeSize = floor(leftWristx - rightWristx);
        console.log("Left:" + leftWristx + "Right:" + rightWristx + "Side:" + shapeSize);
    }
}

function modelloaded(){
    console.log('Model is loaded');
}



function draw() {
    background('#E34234');
    text('Samvith', nosex, nosey);
    textSize(shapeSize);
    fill('#FFFFFF')

}