function preload() {

}
function setup() {
canvas = createCanvas(800,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('MobileNet', loaded)
}
function draw() {
image(video,0,0,800,500);
classifier.classify(video, gotResults)
}
function loaded() {
    console.log('It is loaded');
}
function gotResults(error,results) {
    if (error) {
        console.log(error);

    }
    else {
        console.log(results);
        document.getElementById("obj").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(1);
    }
}