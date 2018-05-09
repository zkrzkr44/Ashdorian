function setup() {
  createCanvas(800,800);
}
function draw() {
  

  drawBodyOfHouse(-2,2);

  drawTallWindow(243,495);

  drawTallWindow(458,495);

  drawWideWindow(320,380);

  drawDoor(339,495);

  drawRoof(119,319);

  drawChimney(213,256);

}

function drawBodyOfHouse(x,y) {

  fill(255,150,0);

  rect(x+203,y+318,364,364);

}


function drawTallWindow(x, y) {

  fill(0,30,200, 235); // skyblue

  rect(x, y, 69, 129);

  strokeWeight(3);

  line(x,y+62,x+69,y+62);

  line(x+33,y,x+33,y+126);

}

function drawWideWindow(x, y) {

  fill(0,30,200, 235); // skyblue

  rect(x,y,125,76);

  strokeWeight(3);

  line(x,y+40,x+124,y+40);

  line(x+63,y,x+63,y+74);

}

function drawDoor(x, y) {

  fill(100,50,50); // brown

  rect(x,y,93, 186);

  fill(0);

  ellipse(x+22,y+95,20,20);

}


function drawRoof(x, y) {

  fill(170,0,0); // red

  triangle(x, y, x+266, y+-177, x+530, y+0);

}

function drawChimney (x, y) {

  fill(150); // gray

  quad(x, y, x+70, y+-46, x+70, y+-150, x+0, y+-150);

}