let points = []; // Stores the main points to connect lines
let lines = [];  // Stores the lines to be drawn

function setup() {
  createCanvas(400, 400);
  background(255);
}

function mousePressed() {
  let newPoint = createVector(mouseX, mouseY);
  points.push(newPoint); // Store new clicked point

  // Generate lines connecting the new point to previous points
  for (let p of points) {
    if (p !== newPoint) { 
      lines.push({ start: newPoint, end: p });
    }
  }
  
  redraw(); // Refresh canvas to draw new lines
}

function draw() {
  background(255);
  stroke(0);
  
  // Draw stored lines
  for (let l of lines) {
    line(l.start.x, l.start.y, l.end.x, l.end.y);
  }
}
