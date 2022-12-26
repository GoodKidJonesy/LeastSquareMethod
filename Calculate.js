let ysum = 0;
let xsum = 0;
let xysum = 0;
let xsquaresum = 0;

function sumCalculations() {
    //Calculate all the sums needed to calculate
    for (let i = 0; i < data.length; i++) {
        ysum += data[i].y;
        xsum += data[i].x;
        xysum += data[i].x * data[i].y;
        xsquaresum += Math.pow(data[i].x, 2);
    }
}

function a() {
    //split up numerator and denominator and calculate them
    let numerator = (xysum - (1 / data.length) * xsum * ysum);
    let denominator = (xsquaresum - (1 / data.length) * Math.pow(xsum, 2));

    //Do the division and return the value
    return (numerator / denominator);
}

function b() {
    //Calculate the value of b
    return ((1 / data.length) * (ysum - (a() * xsum)));
}