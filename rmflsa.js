function drawHouse(var x, var y) {
  
  scale(1.2);
  drawBodyOfHouse(x+-2,y+2);

  drawTallWindow(x+243,y+495);

  drawTallWindow(x+458,y+495);

  drawWideWindow(x+320,y+380);

  drawDoor(x+339,y+495);

  drawRoof(x+119,y+319);

  drawChimney(x+213,y+256);

}

function drawBodyOfHouse(var x, var y) {

  fill(255,150,0);

  rect(x+203,y+318,364,364);

}


function drawTallWindow(var x, var y) {

  fill(#09d7f6, 235); // skyblue

  rect(x, y, 69, 129);

  strokeWeight(3);

  line(x,y+62,x+69,y+62);

  line(x+33,y,x+33,y+126);

}

function drawWideWindow(var x, var y) {

  fill(#09d7f6, 235); // skyblue

  rect(x,y,125,76);

  strokeWeight(3);

  line(x,y+40,x+124,y+40);

  line(x+63,y,x+63,y+74);

}

function drawDoor(var x, var y) {

  fill(#8B4513); // brown

  rect(x,y,93, 186);

  fill(0);

  ellipse(x+22,y+95,20,20);

}


function drawRoof(var x, var y) {

  fill(170,0,0); // red

  triangle(x, y, x+266, y+-177, x+530, y+0);

}

function drawChimney (var x, var y) {

  fill(#4F4F4F); // gray

  quad(x, y, x+70, y+-46, x+70, y+-150, x+0, y+-150);

}



function setup() {
  createCanvas(1000,1000);
  drawHouse(0,100);

}

function draw() {
  
}
