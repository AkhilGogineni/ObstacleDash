var player;
var ground;
var celing;
var spike, spike2, spike3;
var spike1;
var play = 1;
var end = 0;
var gamestate = play;
var gameOver;
var restart;
var obstaclesGroup;
var obstaclesGroup2;
var score = 0;



function preload(){
  spike = loadImage("obstacleImages/Spike.png");
  flyingbat = loadImage("obstacleImages/flyingbat.png")
  gameoverimage = loadImage("obstacleImages/GameOver.png");
  reset = loadImage("obstacleImages/play.png");
}

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
  gameOver = createSprite(300,50,30,20);
  gameOver.addImage("gameovertext",gameoverimage);
  restart = createSprite(300,100,30,30);
  restart.addImage("restart button",reset);
}




function draw() {
  background(255,255,255);  
  player.collide(ground);
  drawSprites();


  // playstate
  if (gamestate === play)  {
  
 
    gameOver.visible = false;
    restart.visible = false;
    // player jump
    if(keyDown("space") && player.y > 470 ) {
      player.velocityY = -13;
    }
    
    //console.log(player.y);
    player.velocityY = player.velocityY + 0.7
    
    
    
    
  
    
    score = score + Math.round(getFrameRate()/60);
    
    
    if(frameCount<3000){
      spawnObstacles();
      }
      if(frameCount>3000){
        spawnObstacles2();
      }
      
    if(player.isTouching(obstaclesGroup)|| player.isTouchubg(obstaclesGroup2)) {
      gamestate = end;
    }
    
    }
    
    
    // what to do in end state
    else if(gamestate === end) {
      gameOver.visible = true;
      restart.visible = true;
      obstaclesGroup.setVelocityXEach(0);
      obstaclesGroup.setLifetimeEach(-1);
      ground.velocityX = 0;
    }
    
    // if restart sprite is pressed back to play state
    if(mousePressedOver(restart)) {
      gamestate = play;
      obstaclesGroup.destroyEach();
      score = 0;
    }
    
  console.log(frameCount);
  drawSprites();

  
}

function spawnObstacles() {
  if (frameCount%100 === 0) {
    obstacle = createSprite(1100,500,20,20);
    obstacle1 = createSprite(1150,500,20,20);
    obstacle.velocityX = -6;
    obstacle1.velocityX = -6;
    var rand = Math.round(random(1,4));
switch (rand){

  case 1: obstacle.addImage(spike);
          obstacle1.visible = false;
          obstacle.scale = 0.8;
          break;
  case 2: obstacle.addImage(flyingbat);
          obstacle1.visible = false;
          obstacle.y = 380;
          obstacle.scale = 0.3;
          break;
  case 3: obstacle.addImage(spike);
          obstacle1.addImage(spike);
          obstacle.scale = 0.8;
          obstacle1.scale = 0.8;
          break;
  case 4: obstacle.addImage(flyingbat);
          obstacle1.addImage(flyingbat);
          obstacle.y = 380;
          obstacle1.y = 380;
          obstacle1.x = 1200;
          obstacle.scale = 0.3;
          obstacle1.scale = 0.3;
  }
    obstacle.lifetime = 240;
    obstaclesGroup.add(obstacle);
  }
}

function spawnObstacles2() {
  if (frameCount%75 === 0) {
    obstacle = createSprite(1100,500,20,20);
    obstacle1 = createSprite(1150,500,20,20);
    obstacle2 = createSprite(1200,500,20,20);
    obstacle.velocityX = -6;
    obstacle1.velocityX = -6;
    obstacle2.velocityX = -6;
    var rand = Math.round(random(1,4));
switch (rand){


  case 1: obstacle.addImage(spike);
          obstacle1.addImage(spike);
          obstacle2.visible = false;
          obstacle.scale = 0.8;
          obstacle1.scale = 0.8;
          break;
  case 2: obstacle.addImage(flyingbat);
          obstacle1.addImage(flyingbat);
          obtsacle2.visible = false;
          obstacle.y = 380;
          obstacle1.y = 380;
          obstacle1.x = 1200;
          obstacle.scale = 0.3;
          obstacle1.scale = 0.3;
          break;
  case 3: obstacle.addImage(flyingbat);
          obstacle1.addImage(flyingbat);
          obstacle2.addImage(flyingbat);
          obstacle.y = 380;
          obstacle1.y = 380;
          obstacle2.y = 380;
          obstacle1.x = 1200;
          obstacle2.x = 1300;
          obstacle.scale = 0.3;
          obstacle1.scale = 0.3;
          obstacle2.scale = 0.3;
          break;
  case 4: obstacle.addImage(spike);
          obstacle1.addImage(spike);
          obstacle2.addImage(spike);
          obstacle.scale = 0.8;
          obstacle1.scale = 0.8;
          obstacle2.scale = 0.8;
          break;

  }
    obstacle.lifetime = 240;
    obstaclesGroup2.add(obstacle);
  }
}