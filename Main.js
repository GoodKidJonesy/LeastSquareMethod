function windowResized() {
    //Resize canvas to window if window is resized
    resizeCanvas(windowWidth - 10, windowHeight - 10);
}

function setup() {
    //Create canvas, and calculate trendline
    createCanvas(windowWidth - 10, windowHeight - 10);
    inputs();

}

function draw() {
    //Translate to the middle of canvas and run zoom function
    zooming();
    moving();
    translate(width / 2 + xOffset, height / 2 + yOffset);

    //Draw stuff
    background(255);
    drawAxes();
    drawFunction();
    drawPoints();
    equation();

}