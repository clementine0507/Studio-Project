# Studio-Project
My topic is the `interactivity`.

My work's URL: https://clementine0507.github.io/Studio-Project/
## Week1-Line’s Game 1.0

I started by uploading each version of the code to the p5.js web editor and generating a URL for easy access. However, my final work will be published using the GitHub-generated URL.

URL from p5.js: [Line's game 1.0](https://editor.p5js.org/wtan387/full/yineqLirn)

Inspired by Sol LeWitt's *ChatGPT* series, I developed an interest in the combination of black and white. The arrangement of lines gives me a sense of order that, in reality, does not strictly follow a fixed pattern. To explore this visual effect, I looked up the `line()` function in the `p5.js` reference and conducted some experiments.

![image](https://github.com/user-attachments/assets/cdcca91f-5dd1-4ee1-83a3-953da22f572a)

I copied the Examples into VScode and changed the four parameters of line().

The original function

![image](https://github.com/user-attachments/assets/8cd2cef1-b779-495f-bd3d-75b5e81a50bd)
![image](https://github.com/user-attachments/assets/e412ded7-f781-4ef2-8fe4-4c85caefdea6)

Then I changed the function
![image](https://github.com/user-attachments/assets/a6194eed-7ce4-4b08-9c60-66f658b67d46)
![image](https://github.com/user-attachments/assets/3f97365e-9e58-41ff-8b15-5059a2790d22)

After experimenting, I learned that the four parameters of the `line()` function represent:  

(x1, y1, x2, y2)  
- **x1**: The x-coordinate of the starting point of the line  
- **y1**: The y-coordinate of the starting point of the line  
- **x2**: The x-coordinate of the ending point of the line  
- **y2**: The y-coordinate of the ending point of the line  

With these four parameters, I can freely adjust the length, angle, and position of the lines.

Some ideas I want to try:  

1. Follow the user's mousePressed to generate random lines.  
2. Emit lines from several random points and make them converge at other points (animation).  
3. Lines will avoid the mouse position, leaving a empty area around the mouse.  
4. Randomly moving curves.  
5. Lines with random colors, but restricted within a specific color range (e.g., only shades of yellow).  
6. Curves that change based on the user's mouse movement (still figuring out how to implement this).

Based on what I learned in Workshop 2 about the `mousePressed()` system function in `p5.js` and the `for` loop from Workshop 1, I want to start by writing a basic interactive code.
- Follow the user's mousePressed to generate random lines.

```javascript
function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
}
```

`draw()` continuously refreshes the screen. However, I only want to generate new random lines when the mouse is clicked. Therefore, I kept `draw()` empty and chose to draw the lines inside `mousePressed()`.

```Javascript
function mousePressed() {
  let lineCount = int(random(1, 6));

  for (let i = 0; i < lineCount; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
    stroke(0);
    line(x1, y1, x2, y2);
  }
}
```

![image](https://github.com/user-attachments/assets/d95ecf3c-f72e-463a-9019-fb5f91e8f6aa)

When I press the screen, I get a random number of lines (1-5).

### Week1-Line’s Game 2.0

URL from p5.js: [Line's game 2.0](https://editor.p5js.org/wtan387/full/bJvAAgsKT)

My second idea:

Emit lines from several random points and make them converge at other points (animation).  

Among the four parameters of `line()`, we know that the first two control the starting point, while the last two determine the length and endpoint position. So, I just need to keep the first two parameters consistent and use a `for` loop to increase the number of lines (while still setting the last two parameters to random values).

```Javascript
function mousePressed() {
  background(255); 
  let x1 = random(width);
  let y1 = random(height);
```

Each time the user clicks the mouse, the background turns white (clearing the existing lines) and then a random point is generated.

```Javascript
  for (let i = 0; i < 10; i++) { 
    let x2 = random(width);
    let y2 = random(height);
   
    stroke(0);
    line(x1, y1, x2, y2);
```

Add a `for` loop to reload `x2` and `y2` ten times.

![image](https://github.com/user-attachments/assets/1c85719b-11a1-4137-8357-e541bb9916c7)
![image](https://github.com/user-attachments/assets/cd38004b-a08c-4ac9-b796-97c2ef5f2a0d)

Every time I click the screen, I get some randomly generated lines radiating at different angles. This is somewhat similar to the effect I want, but I hope to achieve a shape where all the points are connected together(like stars).

#### Week1-Line's Game 3.0 and Line's Game 4.0
URL from p5.js: [Line's game 3.0](https://editor.p5js.org/wtan387/full/7bLAQtro8)

After completing the summary of Amy Goodchild's work, I also tried to convey my requirements to ChatGPT, as I couldn’t find any instructions in the p5.js reference that met my conditions. 

However, the process was quite difficult at times, as ChatGPT couldn’t understand what I meant. But once it understood, it directly generated a piece of code for me:

![image](https://github.com/user-attachments/assets/4233bb57-6f32-43cd-829d-26e6b620b7fd)

```Javascript
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
```

After trying this code, it works and does what I want it to do. It generates a point where my mouse is and connects it to other points.

![image](https://github.com/user-attachments/assets/d8595cf8-345c-4f23-9107-135f334146e7)

About the explanation given by chatgpt:

![image](https://github.com/user-attachments/assets/685f461a-e2b6-427f-b224-719f07a9b738)
![image](https://github.com/user-attachments/assets/fe26fa6a-87b4-4448-805a-06b1c17a83ca)
![image](https://github.com/user-attachments/assets/5260b67f-948d-41fd-ade2-61db1d562bf1)
![image](https://github.com/user-attachments/assets/48a1f015-72db-46f1-b7e1-a2cc48bd9a2b)

Based on ChatGPT's explanation, I understand that the code records the position of each click using a points array and stores the start and end points of each line in a lines array. Each time a click occurs, the program generates a new point and connects it to the previous point, forming a new line segment. The `redraw()` function calls the `draw()` function, clears the canvas, and redraws all the lines to ensure the screen is updated. This way, each click adds a new connection.

However, in this code, I actually don't understand what the `createVector` function and the exclamation mark in `if (p !== newPoint) {` mean.

![image](https://github.com/user-attachments/assets/34c47145-3a8e-41fe-8a25-40f356c78e6b)

According to ChatGPT's explanation, `!==` means "not equal to," and in this case, it's used because the condition I set is to prevent the newly clicked point from connecting to itself. The points will only be connected if `p` is a previously clicked point.

About the explanation of `createVector()`, I found it in the [reference](https://p5js.org/zh-Hans/reference/p5/createVector/):

![image](https://github.com/user-attachments/assets/fb6f5f12-3d7c-444c-a016-5c69049dfe37)

From the reference, it can be understood that the line of code `let newPoint = createVector(mouseX, mouseY);` tells the program that the `newPoint` is located at x-coordinate 100 and y-coordinate 200 on the canvas.
