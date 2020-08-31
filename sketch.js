
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage=loadAnimation("banana.png");
  bananaImage.scale=0.05;
  
  obstacleImage=loadAnimation("obstacle.png");
  obstacleImage.scale=0.15;
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,380,600,20);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  survivalTime=0;
}


function draw() {
  background("white");
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
if(keyDown("space")) {
        monkey.velocityY = -12;
}
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x<0){
    ground.x = ground.width /2;
  }
  
  monkey.collide(ground);
  
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
  banana.y = Math.round(random(80,120));
  banana.addAnimation(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 200;
  bananaGroup.add(banana);
}
  
}

function obstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
  obstacle.y = Math.round(random(80,120));
  obstacle.addAnimation(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
}
  
}






