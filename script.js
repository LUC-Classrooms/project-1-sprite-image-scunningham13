/**
 * Project 1 - Interactive Image
 * Name: 
 * Comments: 
 */

// Global Variables go here
var x, y, a=0;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
x=width/2;
y=height/2;
}

function draw(){
  // this function runs again and again (60x per second)
  background(255, 182, 193); //light gray background
  x = mouseX;
  y = mouseY;
  push ();
  translate (x, y);
  // rotate(a);
  a = a + 0.02
  // add your image drawing code here
  fill (250, 0, 250);
  ellipse (0, 0, 35, 165);
  fill (120, 150, 250);
  ellipse (-90, -25, 150, 30); // wings
  ellipse (90, -25, 150, 30);
  ellipse (-90, 5, 150, 30);
  ellipse (90, 5, 150, 30);
  line (0, -83, -15, -125); // antennas 
  line (0, -82, 15, -125);
  ellipse(-15, -125, 8, 8);
  ellipse(15, -125, 8, 8);
  fill (0); // eyes
  ellipse (-5, -50, 3, 3);
  ellipse (5, -50, 3, 3);
  pop ();
  



  
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}