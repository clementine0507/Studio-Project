# Studio-Project
## Week1
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

  ’’’
  Javascript
  
function setup() {

  createCanvas(800, 800);
  
  background(255); // white background
  
}


function draw() {

}

’’’
