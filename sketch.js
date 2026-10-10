let xMax = 400
let yMax = 600
let xfrog = xMax/2
let yfrog = yMax*0.5

// function preload() {
//   // put preload code here
// }

function drawFrog(){
  push();

//corpo
  fill(87, 146, 185); // azz medio/chiaro
  triangle(xfrog-190, yfrog+300, xfrog-120, yfrog+210, xfrog-90, yfrog+300);
  
  fill(42, 103, 141); // azz medio/scuro
  triangle(xfrog-190, yfrog+300, xfrog-105, yfrog+255, xfrog-90, yfrog+300);

    fill(245, 245, 220); //panna chiaro
  triangle(xfrog-45, yfrog+320, xfrog+20, yfrog+260, xfrog-90, yfrog+200);
  
  fill(51, 123, 168); // azz medio
  triangle(xfrog-50, yfrog+300, xfrog-120, yfrog+210, xfrog-90, yfrog+300);

    fill(223, 217, 194); //panna medio
  triangle(xfrog-54, yfrog+295, xfrog-90, yfrog+200, xfrog-150, yfrog+170);

    fill(223, 217, 194); //panna medio
  triangle(xfrog-12, yfrog+300, xfrog+60, yfrog+300, xfrog+80, yfrog+180);
  
  fill(234, 230, 202); //panna chiaro
  triangle(xfrog-25, yfrog+300, xfrog+15, yfrog+300, xfrog+20, yfrog+260);

    fill(212, 203, 185); //panna scuro
  triangle(xfrog-90, yfrog+200, xfrog+60, yfrog+120, xfrog+20, yfrog+260);

      fill(234, 230, 202); //panna medio
  triangle(xfrog-90, yfrog+200, xfrog+60, yfrog+120, xfrog-150, yfrog+170);

      fill(245, 245, 220); //panna chiaro
  triangle(xfrog+140, yfrog+100, xfrog+60, yfrog+120, xfrog+20, yfrog+260);

//testa
  fill(123, 168, 202); // azz chiaro
  triangle(xfrog, yfrog+80, xfrog+60, yfrog+120, xfrog-50, yfrog+145);

    fill(51, 123, 168); // azz medio
  triangle(xfrog, yfrog+80, xfrog-95, yfrog+75, xfrog-50, yfrog+145);
  
  fill(33, 82, 114); // azz scuro
  triangle(xfrog-155, yfrog+160, xfrog-95, yfrog+75, xfrog-50, yfrog+145);
    fill(33, 82, 114); // azz scuro
  triangle(xfrog-155, yfrog+160, xfrog-150, yfrog+170, xfrog-50, yfrog+145);

  fill(42, 103, 141); // azz medio/scuro
  triangle(xfrog-155, yfrog+160, xfrog-95, yfrog+75, xfrog-170, yfrog+100);

      fill(51, 123, 168); // azz medio
  triangle(xfrog, yfrog+80, xfrog+60, yfrog+120, xfrog+35, yfrog-10);
  
  fill(87, 146, 185); // azz medio/chiaro
  triangle(xfrog, yfrog+80, xfrog-95, yfrog+75, xfrog-120, yfrog+35);

   fill(123, 168, 202); // azz chiaro
  triangle(xfrog, yfrog+80, xfrog-50, yfrog+61, xfrog+35, yfrog-10);

  fill(87, 146, 185); // azz medio/chiaro
  triangle(xfrog+60, yfrog+120, xfrog+41, yfrog+20, xfrog+140, yfrog+100);

      fill(33, 82, 114); // azz scuro
  triangle(xfrog+80, yfrog-30, xfrog+41, yfrog+20, xfrog+35, yfrog-10);

  fill(42, 103, 141); // azz medio/scuro
  triangle(xfrog+140, yfrog+100, xfrog+60, yfrog+40, xfrog+110, yfrog+50);











  
  //zampa
  fill(51, 123, 168); // azz medio
  triangle(xfrog+80, yfrog+300, xfrog+120, yfrog+300, xfrog+95, yfrog+280);
  fill(33, 82, 114); // azz scuro
  triangle(xfrog+66, yfrog+265, xfrog+120, yfrog+300, xfrog+80, yfrog+180);

  
//bocca
  // fill(51, 123, 168); // azz medio
  // triangle(xfrog-150, yfrog+170, xfrog+60, yfrog+120, xfrog+60, yfrog+105);
  // fill(51, 123, 168); // azz medio
  // triangle(xfrog+140, yfrog+100, xfrog+60, yfrog+120, xfrog+60, yfrog+105);
  

//occhi
//occhio sx
  fill(235,155,55);
  ellipse(xfrog+85, yfrog+10, 100, 100);

  // fill(255,213,33);
  // ellipse(xfrog+60, yfrog-15, 80, 80);

    fill(0);
  ellipse(xfrog+90, yfrog+20, 50, 50);

  // occhio dx
  fill(235,155,55);
  ellipse(xfrog-140, yfrog+65, 100, 100);

  // fill(255,213,33);
  // ellipse(xfrog-120, yfrog+15, 80, 80);

      fill(0);
  ellipse(xfrog-130, yfrog+75, 50, 50);

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



//prima bozza
// let xMax = 400
// let yMax = 600
// let xfrog = xMax/2
// let yfrog = yMax*0.5

// function preload() {
//   // put preload code here
// }

// function drawFrog(){
//   push();

// //corpo
//   fill(60, 255, 20);
//   triangle(xfrog-190, yfrog+310, xfrog-90, yfrog+110, xfrog-62, yfrog+220);

//     fill(0, 0, 0);
//   triangle(xfrog-190, yfrog+310, xfrog-67, yfrog+225, xfrog+180, yfrog+300);

//       fill(255, 255, 255);
//   triangle(xfrog+70, yfrog+240, xfrog-67, yfrog+225, xfrog+180, yfrog+300);

//         fill(250, 0, 0);
//   triangle( xfrog+70, yfrog+240, xfrog+90, yfrog+175, xfrog+180, yfrog+300);

//   fill(170, 0, 0);
//   triangle(xfrog+60, yfrog+90, xfrog+120, yfrog+100, xfrog+70, yfrog+240);

//   fill(0, 130, 55);
//   triangle(xfrog-75, yfrog+130, xfrog+60, yfrog+90, xfrog+70, yfrog+240);
  
//   fill(220, 255, 220);
//   triangle( xfrog-140, yfrog+95, xfrog-75, yfrog+130, xfrog+70, yfrog+90);

//     fill(0, 165, 30);
//   triangle( xfrog-140, yfrog+95, xfrog-75, yfrog+130, xfrog+-70, yfrog+200);

//       fill(120, 0, 0);
//   triangle( xfrog+70, yfrog+240, xfrog-75, yfrog+130, xfrog+-70, yfrog+225);




//   //testa
//   fill(83, 160, 24);
//   triangle(xfrog, yfrog, xfrog+40, yfrog-30, xfrog+60, yfrog+90);

//   fill(255, 170, 2);
//   triangle(xfrog-90, yfrog-10, xfrog, yfrog, xfrog+40, yfrog-30);
  
//   fill(250, 140, 0);
//   triangle(xfrog-90, yfrog-10, xfrog-95, yfrog+95, xfrog, yfrog);

//   fill(255, 60, 0);
//   triangle(xfrog+60, yfrog+90, xfrog-95, yfrog+95, xfrog, yfrog);
  
//     fill(55, 106, 16);
//   triangle(xfrog-90, yfrog-10, xfrog-95, yfrog+95, xfrog-140, yfrog+95);

// fill(255, 0, 0);
//   triangle(xfrog+120, yfrog+100, xfrog+40, yfrog-30, xfrog+60, yfrog+90);

//       fill(110, 213, 32);
//   triangle(xfrog+60, yfrog+80, xfrog+120, yfrog+100, xfrog-140, yfrog+95);


// //occhi
// //occhio sx
//   fill(0,130,55);
//   ellipse(xfrog+65, yfrog-20, 90, 90);

//   fill(255,213,33);
//   ellipse(xfrog+60, yfrog-15, 80, 80);

//     fill(0);
//   ellipse(xfrog+50, yfrog-10, 50, 50);

//   //occhio dx
//   fill(0,130,55);
//   ellipse(xfrog-125, yfrog+10, 90, 90);

//   fill(255,213,33);
//   ellipse(xfrog-120, yfrog+15, 80, 80);

//       fill(0);
//   ellipse(xfrog-110, yfrog+18, 50, 50);

// //naso
//   //     fill(255);
//   // ellipse(xfrog-50, yfrog+50, 10, 15);

//     pop();
  
// }



// function setup() {
//   createCanvas(400, 600);
//   console.log('p5.js version:', p5.VERSION);
//   // put setup code here
//   const message =
//     "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
//   textAlign(CENTER, CENTER);
//   textSize(16);
//   text(message, width / 2, height / 2);
//   strokeWeight(0)
// }

// function draw() {
//   // put drawing code here
// background(30, 50, 44);


//     drawFrog();
  
// }

