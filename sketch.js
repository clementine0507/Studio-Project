function setup() {
  createCanvas(800, 800);
  background(255); // white background
}

function draw() {
}

function mousePressed() {
  let lineCount = int(random(1, 6)); // Randomly generate 1~5 lines

  for (let i = 0; i < lineCount; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
    stroke(0); // black lines
    line(x1, y1, x2, y2);
  }
}