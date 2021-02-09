let xoff=0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  alert("This is the statement for the piece titled: Snickerdoodle. It is an effect that looks like a butterfly. It comprises of classic blue colour lines on loop. There are ellipses behind the lines which create an illusion of stars.They sort of twinkle as you move your cursor.Hold on your cursor for 3-4 seconds at one place to see the effect happens. The background has a dissapearing effect to it.")
}

function draw() {
  background("#ffffff05");


  let x = 0;
  let y = 0;

  for (let x = 0; x <= width; x = x + 50) {

    for (let y = 0; y <=height; y = y + 50) {

      //fill(random(200), 150, random(170));
      fill(255);
      noStroke();
      ellipse(x, y,4,4);
    }
  }
  
  
  for (let x = 0; x <= width; x = x + 10) {

    for (let y = 0; y <=height; y = y + 10) {

    
  //   stroke( 0, 0, random(151));
      
    stroke(0, 62, 81);
     line(x,y,mouseX,mouseY);
      
      
   // line(x,y,mouseX,mouseY);
      
    }
  }
 
}