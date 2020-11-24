function setup(){
    CreateCanvas(400, 400);
}

function draw() {
    fill(mouseX%255, mouseY%255, mouseX/mouseY);
    ellipse(mouseX, mouseY, 30, 30);
}

