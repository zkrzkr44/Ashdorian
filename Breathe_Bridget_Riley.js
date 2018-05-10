var tri = new Array(20);
var col;

function setup() {
  createCanvas(600,1000);
  col = 0;
  background(0);
  
  for(var i = 0; i<tri.length; i++) {
    tri[i] = 0;
  }
}

function draw() {
  background(0+col, 0+col/2, (0+col*3)%256);
  for(var i = 0; i<tri.length; i++) {
    tri[i] = 30*i;
    fill(255);
    if(i<19) {
      triangle(tri[i], 0, tri[i+1], 0, ((tri[i]+tri[i+1])/2), mouseY);
    }
    else if(i==19) {
      triangle(tri[i], 0, 600, 0, 585, mouseY);
    }
  }
}

function keyPressed() {
  if(keyCode == ENTER) {
    if(col == 0) col = random(0,255);
    else if(col !== 0) col = 0;
  }
}
