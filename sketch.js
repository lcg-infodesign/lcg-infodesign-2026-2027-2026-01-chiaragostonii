let xMax = 400
let yMax = 600
let xfrog = xMax/2
let yfrog = yMax*0.5

function preload() {
  // put preload code here
}

function drawFrog(){
  push();

//corpo
  fill(255, 255, 255);
  triangle(xfrog-190, yfrog+310, xfrog-90, yfrog+110, xfrog-62, yfrog+220);

  fill(170, 0, 0);
  triangle(xfrog+60, yfrog+90, xfrog+120, yfrog+100, xfrog+70, yfrog+240);

  fill(0, 130, 55);
  triangle(xfrog-75, yfrog+130, xfrog+60, yfrog+90, xfrog+70, yfrog+240);
  
  fill(220, 255, 220);
  triangle( xfrog-140, yfrog+95, xfrog-75, yfrog+130, xfrog+70, yfrog+90);

  //       fill(250, 0, 0);
  // triangle( xfrog-200, yfrog+250, xfrog-105, yfrog+145, xfrog-110, yfrog+225);

    fill(0, 165, 30);
  triangle( xfrog-140, yfrog+95, xfrog-75, yfrog+130, xfrog+-70, yfrog+200);

      fill(120, 0, 0);
  triangle( xfrog+70, yfrog+240, xfrog-75, yfrog+130, xfrog+-70, yfrog+225);




  //testa
  fill(83, 160, 24);
  triangle(xfrog, yfrog, xfrog+40, yfrog-30, xfrog+60, yfrog+90);

  fill(255, 170, 2);
  triangle(xfrog-90, yfrog-10, xfrog, yfrog, xfrog+40, yfrog-30);
  
  fill(250, 140, 0);
  triangle(xfrog-90, yfrog-10, xfrog-95, yfrog+95, xfrog, yfrog);

  fill(255, 60, 0);
  triangle(xfrog+60, yfrog+90, xfrog-95, yfrog+95, xfrog, yfrog);
  
    fill(55, 106, 16);
  triangle(xfrog-90, yfrog-10, xfrog-95, yfrog+95, xfrog-140, yfrog+95);

fill(255, 0, 0);
  triangle(xfrog+120, yfrog+100, xfrog+40, yfrog-30, xfrog+60, yfrog+90);

      fill(110, 213, 32);
  triangle(xfrog+60, yfrog+80, xfrog+120, yfrog+100, xfrog-140, yfrog+95);


//occhi
//occhio sx
  fill(0,130,55);
  ellipse(xfrog+65, yfrog-20, 90, 90);

  fill(255,213,33);
  ellipse(xfrog+60, yfrog-15, 80, 80);

    fill(0);
  ellipse(xfrog+50, yfrog-10, 50, 50);

  //occhio dx
  fill(0,130,55);
  ellipse(xfrog-125, yfrog+10, 90, 90);

  fill(255,213,33);
  ellipse(xfrog-120, yfrog+15, 80, 80);

      fill(0);
  ellipse(xfrog-110, yfrog+18, 50, 50);

//naso
  //     fill(255);
  // ellipse(xfrog-50, yfrog+50, 10, 15);

    pop();
  
}



function setup() {
  createCanvas(400, 600);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
  strokeWeight(0)
}

function draw() {
  // put drawing code here
background(30, 50, 44);


    drawFrog();
  
}

