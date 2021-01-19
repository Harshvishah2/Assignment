var g = 100;
var b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, g, b);
  
  g = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 600, 0, 255, 0);

  fill(100, 0, 250)
  stroke(0, 255, 255);
  // quad(30,10,50,10, 69, 63, 30, 76);

  arc(mouseX, mouseY, 500, 500, 10, 100);
  fill(0, 210, 255);
  arc(100, 100, 100, 100, 100, 100, 100, 100)
}