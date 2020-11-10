var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);


}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(gameObject1,movingRect)) {
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "yellow";
    gameObject1.shapeColor = "yellow";
  }

  if( isTouching(movingRect,gameObject3)){
    fixedRect.shapeColor = "white"
    fixedRect.scale = 1

  }
  else {
    fixedRect.scale = 2

  }
  



  drawSprites();
}
