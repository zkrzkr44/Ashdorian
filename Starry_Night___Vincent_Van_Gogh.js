var xPos, yPos, xDir, yDir, col;

function setup() {
  createCanvas(600,600);
  xPos = 0;
  yPos = 0;
  xDir = 10;
  yDir = 10;
  col = 0;
}

function draw() {
  background(0+col,132,255-col);
  fill(83);
  noStroke();
  quad(103,599,290,599,195,195,133,254);
  triangle(196,246,149,258,162,21);
  triangle(258,599,390,599,301,417);
  fill(42+col,42,197);
  ellipse(54,575,135,83);
  ellipse(447,571,145,88);
  ellipse(552,541,201,142);
  fill(255);
  ellipse(283,173,80,62);
  ellipse(355,173,126,89);
  ellipse(430,173,80,62);
  fill(255-col,255,0+col,153);
  ellipse(536+xPos,49+yPos,70,70);
  ellipse(297+xPos,265+yPos,70,70);
  ellipse(457+xPos,437+yPos,70,70);
  ellipse(55+xPos,366+yPos,50,50);
  ellipse(110+xPos,120+yPos,40,40);
  ellipse(226+xPos,68+yPos,30,30);
  ellipse(564+xPos,315+yPos,46,46);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    xPos += xDir;
    if(xPos>300) xPos = -100;
  }
  if(keyCode == LEFT_ARROW) {
    xPos -= xDir;
    if(xPos<-300) xPos = 100;
  }
  if(keyCode == UP_ARROW) {
    yPos -= yDir;
    if(yPos<-100) yPos = 50;
  }
  if(keyCode == DOWN_ARROW) {
    yPos += yDir;
    if(yPos>100) yPos = -50;
  }
  if(keyCode == ENTER) {
    if(col == 0) col = 100;
    else if(col == 100) col = 0;
  }
}
