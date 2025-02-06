function setup() {
  createCanvas(800, 800);
  background(255);
}


function mousePressed() {
  background(255);
  let x1 = random(width);
  let y1 = random(height);
 
  for (let o = 0; o < 10; o++) {
    let x2 = random(width);
    let y2 = random(height);
   
    stroke(0);
    line(x1, y1, x2, y2);
  }
}
