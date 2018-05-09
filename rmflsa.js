function btropg(var x, var y, var h, var s) {


  x= x*(1/s);

  y= y*(1/s);

  scale(s);

  var hy = y-(h*5);

  //foot...?

  stroke(0);

  strokeWeight(0.5);

  fill(#FA9714);

  triangle(x, y, x+10, y+10, x-10, y+10);

  triangle(x, y, x+17, y+5, x+10, y+10);

  triangle(x, y, x-17, y+5, x-10, y+10);


  quad(x+10, y+10, x-10, y+10, x-15, y+20, x+15, y+20);

  quad(x-10, y+10, x-15, y+20, x-25, y+15, x-17, y+5);

  quad(x+10, y+10, x+15, y+20, x+25, y+15, x+17, y+5);


  strokeWeight(2);

  stroke(0);

  line(x-5, y+1, x-40, y-10);

  line(x-40, y-10, x-50, y+40);


  line(x-5, y+2, x-20, y+10);

  line(x-20, y+10, x-30, y+50);


  line(x+5, y+2, x+20, y+10);

  line(x+20, y+10, x+30, y+50);




 line(x+5, y+1, x+40, y-10);

  line(x+40, y-10, x+50, y+40);


  //body

  strokeWeight(0.3);

  stroke(0);

  for (var i =1; i<=h; i++ ) {

    fill(150);

    ellipse(x, y-(i*5), 30, 13);

  }


  //head

  fill(#E39C40);

  triangle(x, hy, x, hy-10, x-30, hy-20);

  fill(#FFC271);

  triangle(x, hy, x+30, hy-20, x, hy-10);//buttom


  fill(#F7AD4B);

  triangle(x, hy-10, x+30, hy-20, x+20, hy-70);

  fill(#E3A049);

  triangle(x, hy-10, x-30, hy-20, x-20, hy-70);

  fill(#FF9E1F);

  triangle(x, hy-10, x-20, hy-70, x+20, hy-70);//middle middle

  fill(#E39C40);

  triangle(x-30, hy-20, x-30, hy-75, x-20, hy-70);

  fill(#FFC271);

  triangle(x+30, hy-20, x+30, hy-75, x+20, hy-70);//side middle


  fill(#E39C40);

  triangle(x, hy-95, x-20, hy-70, x+20, hy-70);

  triangle(x, hy-95, x-30, hy-75, x-20, hy-70);

  triangle(x, hy-95, x+30, hy-75, x+20, hy-70);//top



  stroke(#FA9714);

  strokeWeight(2);

  line(x+15, hy, x+30, hy+30);

  line(x+12, hy+5, x+20, hy+40);

  line(x-12, hy+5, x-20, hy+40);

  line(x-15, hy, x-30, hy+30);

}

function drawCloud(var x,var y,var z,var w,var k)

{

  noStroke();

  fill(k);

  ellipse(x,y,z,z);

  ellipse(x-w,y,0.8*z,0.8*z);

  ellipse(x+w,y,0.8*z,0.8*z);

}

function drawFrog(var x, var y, var size) {  

  noStroke();


  /*head*/

  fill(53, 182, 44);

  ellipse(x, y-size/4.8, size/1.25, size/1.5); 

  ellipse(x-size/4.8, y-size/2, size/4, size/4); 

  ellipse(x+size/4.8, y-size/2, size/4, size/4); 


  /*body*/

  ellipse(x, y+size/4, size, size); 

  fill(109, 200, 59);

  ellipse(x, y+size/3.7, size/1.6, size/1.5);


  /*legs*/

 

  fill(53, 182, 44);

  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);

  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);

  rect(x+size/3, y+size/2, size/3, size/4.8, 100);

  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);


/*eyes*/

  fill(255); 

  ellipse(x-size/4.8, y-size/2, size/6, size/6); 

  ellipse(x+size/4.8, y-size/2, size/6, size/6); 


  fill(0); 

  ellipse(x-size/4.8, y-size/2, size/8, size/8); 

  ellipse(x+size/4.8, y-size/2, size/8, size/8);   


  ellipse(x-size/24, y-size/2.7, size/40, size/40); 

  ellipse(x+size/24, y-size/2.7, size/40, size/40); 


  fill(255); 

  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 

  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 


  /*cheek*/

  fill(200, 0, 0); 

  ellipse(x-size/4, y-size/3.9, size/4, size/4); 

  ellipse(x+size/4, y-size/3.9, size/4, size/4);


  /*mouth*/

  noFill();

  stroke(0);

  strokeWeight(size/55);

  arc(x, y-size/3.5, size/3, size/4, 0, PI);

} 

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

function drawPig(var x, var y, var size, var tall){

 scale(1.5);

 //tail

 noFill();

 stroke(255,18,120);

 strokeWeight(5);

 arc(x-170,y+100,90,100,radians(0),radians(180),OPEN);

 arc(x-200,y+100,30,40,radians(180),radians(360), OPEN);

arc(x-210,y+100,50,50,radians(0),radians(180),OPEN);

 noStroke();

 

 //leg

 fill(250,190,220);

rect(x-90,y+120,30,70);

rect(x+60,y+120,30,70);

 

fill(0);

rect(x-90,y+170,30,30);

rect(x+60,y+170,30,30);

 

  //body

 fill(250,190,220);

 ellipse(x, y, size, tall);

 ellipse(x,y-130,230,210);

 //eyes

 fill(0);

 ellipse(x-50,y-150,35,35);

 ellipse(x+50,y-150,35,35);

 fill(255);

 ellipse(x-45,y-145,10,10);

 ellipse(x+55,y-145,10,10);

 

//nose

 fill(245,143,190);

 ellipse(x,y-100,100,80);

 

 //nose hole

fill(0);

 ellipse(x-20,y-100,15,30);

 ellipse(x+20,y-100,15,30);

 //ears

 fill(250,190,220);

 triangle(x-100,y-245,x-90,y-195,x-50,y-225);

 triangle(x+100,y-245,x+90,y-195,x+50,y-225);

 

 //in ears

 fill(245,214,240);

 triangle(x-94,y-238,x-85,y-200,x-58,y-221);

 triangle(x+94,y-238,x+85,y-200,x+58,y-221);

 

fill(255,18,129);

ellipse(x-80,y-120,40,20);

ellipse(x+80,y-120,40,20);

}

function setup() {
  createCanvas(1800,1000);
}

function draw() {
  fill(#6ED746);
  btropg(1800,1050,15,1); 
  fill(#6EE3FF);  
  rect(0,0,width,700);  
  drawHouse(0,100);   
  drawSquidward(1095,1450, 0, 0, 6, 20);    
  drawCloud(2000,500,300,150,255);   
  drawCloud(1000,300,400,180,255);    
  drawCloud(3700,400,500,230,255);   
  drawPig(1800, 1300, 350, 300);   
  drawFrog(2300,1300, 240);   
  btropg(1800,1050,15,1);
}
