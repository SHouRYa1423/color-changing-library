var fixedRect, movingRect,fixedRect2,fixedRect3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(470, 660, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect2 = createSprite(500, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(430, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
 
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  isTouching(movingRect,fixedRect);
  isTouching(movingRect,fixedRect2);
  isTouching(movingRect,fixedRect3);
  drawSprites();
}

