LwristX = 0;
RwristX = 0;
difference = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    console.log("video");

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet, ACTIVATE!");
}


function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
        LwristX = result[0].pose.leftWrist.x;
        RwristX = result[0].pose.rightWrist.x;
        difference = floor(LwristX - RwristX);
        console.log("difference is = " + difference);
    }
}

function draw()
{
    background("#969A97");
    textSize(difference);
    fill("white");
    text("Harish", 0, 300);
}

/*function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet, ACTIVATE!");
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
    }
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
    }
}


 noseX = result[0].pose.nose.x;
        console.log("Nose X = " + noseX);   
        noseY = result[0].pose.nose.y;
        console.log("Nose Y = " + noseY);  


*/