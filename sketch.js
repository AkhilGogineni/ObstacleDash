var player;
var ground;
var celing;

function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  player = createSprite(100,250,50,50);
  player.shapeColor = "orange"
  ground = createSprite(600,600,1200,200);
  ground.color = "black";
  celing = createSprite(600,200,1200,200);
  celing.shapeColor = "black";
  ground.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  player.collide(ground);
  drawSprites();

  if(keyWentDown("space") && player.y > 470){
    player.velocityY = -13
  }

  console.log(player.y)
  player.velocityY = player.velocityY + 0.7;

}