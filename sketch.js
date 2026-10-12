let xMax = 400
let yMax = 600
let xfrog = xMax/2
let yfrog = yMax*0.5
let xMosca = xMax + 50
let yMosca = yMax/4
let velMosca = 2 //velocità mosca

// function preload() {
//   // put preload code here
// }

function drawBubble(i, bubbleX, bubbleY, transparency, size){
  if(i%2==0){
      fill(17, 100, 55, transparency);
      ellipse(bubbleX, bubbleY, size);
    } else if (i%3==0){
      fill(88, 178, 150, transparency);
      ellipse(bubbleX, bubbleY, size);
    } else if (i%5==0){
      fill(124, 238, 137, transparency);
      ellipse(bubbleX, bubbleY, size);
    } else {
      fill(124, 255, 196, transparency);
      ellipse(bubbleX, bubbleY, size);
    }

}

function drawBubbles(n=620){
  push();
  noStroke();

  for (let i=0; i < n; i++){
    let bubbleX = 0;
    if( i < 10) {
      bubbleX = (i*180) % width + (i%3)*5;
    } else {
      bubbleX = (i*100) % width + (i%3)*10;
    }
    let bubbleY = ((i*90) % height) + (1%5);

    let randomTransparency = random(150, 180);

    if(i%2==0){
      size = 100;
      if(i > 9){
        size = 180} 
    } else if (i%3==0){
      size =  200;
    } else if (i%5==0){
      size = 150;
    } else {
      size = 125;
    }
    drawBubble(i, bubbleX, bubbleY, randomTransparency, size)
  }

  pop();
}


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
  fill(28, 68, 95); // azz scurissimo
  triangle(xfrog-150, yfrog+170, xfrog+60, yfrog+120, xfrog+60, yfrog+105);
  fill(28, 68, 95); // azz scurissimo
  triangle(xfrog+140, yfrog+100, xfrog+60, yfrog+120, xfrog+60, yfrog+105);
  

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

function drawMosca(){
  push();
  //corpo
  fill(97, 86, 126);
  ellipse(xMosca, yMosca, 60, 40);

  //occhi
  fill(35, 0, 41);
  ellipse(xMosca-30, yMosca-5, 15, 20);
  //ali
  fill(200, 205, 208, 120);
  ellipse(xMosca-5, yMosca-25, 20, 30);
  fill(222, 225, 227, 120);
  ellipse(xMosca, yMosca-25, 20, 30);

  pop();

}

function moveMosca(){
  xMosca = xMosca - velMosca;
  
  // quando la mosca esce a sinistra, la faccio ripartire da destra
  if(xMosca < -40){ 
    xMosca = xMax + 50;
  }

}

function setup() {
  createCanvas(400, 600);
  console.log('p5.js version:', p5.VERSION);
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
  strokeWeight(0);
  frameRate(30);

}

function draw() {
  background(40, 41, 62);
  drawBubbles(20);

  drawFrog();
  drawMosca();
  moveMosca();

}





