function drawPoints() {
    for (let i = 0; i < data.length; i++) {
        //Display points
        stroke(0);
        strokeWeight(2);
        noFill();
        ellipse(data[i].x * zoom, -data[i].y * zoom, 2);

        //Display coordinates
        textSize(18);
        noStroke();
        fill(0);
        text('(' + data[i].x + ', ' + data[i].y + ')', data[i].x * zoom + 10, -data[i].y * zoom);
    }
}

function drawAxes() {
    //Draw the axes
    strokeWeight(1);
    stroke(0);
    for (let i = -width - xOffset; i < width - xOffset; i++) {
        line(i, 0, i + 1, 0);
    }
    
    for (let i = -height - yOffset; i < height - yOffset; i++) {
        line(0, i, 0, i + 1);
    }

    //Draw dividers
    for (let i = 0; i < height + abs(yOffset); i += zoom) {
        line(5, i, -5, i);
        line(5, -i, -5, -i);
    }

    for (let i = 0; i < width + abs(xOffset); i += zoom) {
        line(i, 5, i, -5);
        line(-i, 5, -i, -5);
    }
}

function drawFunction() {
    //Draw The Function
    stroke(255, 0, 0);
    strokeWeight(3);
    line((-width - xOffset), -a() * (-width - xOffset) - b() * zoom, (width - xOffset), -a() * (width - xOffset) - b() * zoom);
}

function equation() {
    //Log the equation in console, and make sure it is formatted right
    noStroke();
    textSize(22);
    if (b() > 0) {
        text('y = ' + a() + 'x + ' + b(), -width / 2 + 10 - xOffset, -height / 2 + 20 - yOffset);
    }
    else if (b() == 0) {
        text(('y = ' + a() + 'x'), -width / 2 + 10 - xOffset, -height / 2 + 20 - yOffset);
    }
    else {
        text(('y = ' + a() + 'x - ' + abs(b())), -width / 2 + 10 - xOffset, -height / 2 + 20 - yOffset);
    }
}