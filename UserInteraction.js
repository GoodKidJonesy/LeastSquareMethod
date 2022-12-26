let zoom = 15;
let xOffset = 0; let yOffset = 0;
let prevX = 0; let prevY = 0;
let move = true;

function moving() {
    if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
        if (mouseIsPressed && move) {
            prevX = mouseX;
            prevY = mouseY;
            move = false;
        }

        if (mouseIsPressed && mouseX != prevX) {
            xOffset += mouseX - prevX;
        }
        if (mouseIsPressed && mouseY != prevY) {
            yOffset += mouseY - prevY;
        }
        if (mouseIsPressed) {
            prevX = mouseX;
            prevY = mouseY;
        }
    }
}

function mouseReleased() {
    move = true;
}

function zooming() {
    //change zoom
    if (keyIsPressed) {
        if (keyCode === 38) { zoom += (zoom * 0.1); }
        else if (keyCode === 40 && zoom > 0) { zoom -= (zoom * 0.1); }
    }
}