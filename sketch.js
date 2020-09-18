
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
monkey = createSprite(50,350,10,10); 
monkey.addAnimation("monkey_running", monkey_running);
monkey.scale = 0.1;
bananaGroup = createGroup();
stoneGroup = createGroup();
ground = createSprite(190,370,400,15);
  

  
}


function draw() {
background("green");
fruit();
stones();
  if(keyDown("space")){
  monkey.velocityY = -4;
  }
monkey.velocityY = monkey.velocityY + 0.4;
  monkey.collide(ground);
    if(stoneGroup.isTouching(monkey)){
  monkey.velocityX = 0;
bananaGroup.setVelocityXEach(0);
stoneGroup.setVelocityXEach(0);
        
  }
 ground.visible = false;
drawSprites();
  
}
function fruit() {
if(World.frameCount % 80 === 0){
var banana = createSprite(400, 200,10,10);
banana.addImage("bananaImage", bananaImage);
banana.y = random(50,200);
banana.velocityX = -4;
banana.scale = 0.05;
banana.lifetime = 100;
bananaGroup.add(banana);
}
}
function stones() {
  if(World.frameCount % 300 === 0){
  var obstacles = createSprite(400,350,10,10);
  obstacles.addImage("obstacleImage", obstacleImage);
  obstacles.velocityX = -4;
  obstacles.scale = 0.07;
  stoneGroup.add(obstacles);
  
  }
}




