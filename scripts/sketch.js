function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(mouseX, mouseY, mouseX/mouseY);
  ellipse(mouseX, mouseY, 30, 30);
  
}
