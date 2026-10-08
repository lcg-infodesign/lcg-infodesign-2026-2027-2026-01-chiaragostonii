let xMax = 400
let yMax = 600
let xfrog = xMax/2
let yfrog = yMax*0.5

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(400, 600);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  // const message =
  //   "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  // textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
background(46, 11, 64);
  
}
function drawFrog(){
  push();

  // fill(255, 200, 0);
  // triangle(xfrog, yfrog, xfrog+40, yfrog-50, xfrog+60, yfrog+90);

  // fill(255, 170, 2);
  // triangle(xfrog-90, yfrog-10, xfrog, yfrog, xfrog+40, yfrog-50);
  
  // fill(250, 140, 0);
  // triangle(xfrog-90, yfrog-10, xfrog-95, yfrog+90, xfrog, yfrog);

  // fill(255, 60, 0);
  // triangle(xfrog+60, yfrog+90, xfrog-95, yfrog+90, xfrog, yfrog);
  
  //   fill(40, 140, 0);
  // triangle(xfrog-90, yfrog-10, xfrog-95, yfrog+90, xfrog-170, yfrog+95);

  //     fill(0, 0, 255);
  // triangle(xfrog, yfrog+90, xfrog+95, yfrog+100, xfrog-170, yfrog+95);


  fill(255,255,0);
  ellipse(xfrog+60, yfrog-15, 80, 80);

    fill(255,255,0);
  ellipse(xfrog-140, yfrog+15, 80, 80);



    Pop();
}
