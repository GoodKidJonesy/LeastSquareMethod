let xinput, yinput, calculate;

//Test arrays for early testing of program
let xvalues = [];
let yvalues = [];
let data = [];

function inputs() {
    //Setup inputs for user to use
    xinput = createInput('Your x-values here');
    xinput.position(12, windowHeight - 120);
    xinput.size(250, 30);
    yinput = createInput('Your y-values here');
    yinput.position(12, windowHeight - 80);
    yinput.size(250, 30);

    calculate = createButton('Calculate');
    calculate.position(272, windowHeight - 120);
    calculate.size(70, 70);
    calculate.mousePressed(getData);
}

function getData() {
    //Make sure values are reset before going again
    resetValues();

    //Split up userinput into arrays
    xvalues = split(xinput.value(), ',');
    yvalues = split(yinput.value(), ',');

    //Create array of Vectors with x and y values
    for (let i = 0; i < xvalues.length; i++) {
        data[i] = new p5.Vector(float(xvalues[i]), float(yvalues[i]));
    }

    //Calculate what is needed for program to run
    sumCalculations();
    equation();
}

function resetValues() {
    //Reset everything
    xvalues = [];
    yvalues = [];
    data = [];
    ysum = 0;
    xsum = 0;
    xysum = 0;
    xsquaresum = 0;
}