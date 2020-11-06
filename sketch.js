
var monkey , monkey_running
var banana ,bananaImage 
var obstacle , obstacleImage 
var BananaGroup, obstacleGroup
var survivalTime = 0
var ground

function preload(){
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",  "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  BananaGroup = new Group ();
}


function setup() {
//creating the canvas 
createCanvas(600,400)
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating the ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  survivalTime = 0;
}


function draw() {
  //background
  background(255);
  
  //displaying survival time 
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime,10,50)
  
  //making the monkey jump with space bar
if(keyDown("space") && monkey.y >= 220){
  monkey.velocityY = -12;
}
  //gravity for monkey
  monkey.velocityY = monkey.velocityY + 0.9;
  
  //continous ground  
if (ground.x <  150){
  ground.x = ground.width/2;
} 
  
  //making the monkey collide with the ground
  monkey.collide(ground);
  
  Food();
  Obstacles();
  drawSprites();
}

//creating the bananas 
function Food (){ 
if(frameCount % 80 === 0){
  banana = createSprite(500,50,50,50);
  banana.velocityX = -4;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(140,220));
  banana.lifetime = 300;
  BananaGroup.add(banana);
}
  
}

//creating the obstacles
  function Obstacles(){
if(frameCount % 300 === 0){
  obstacle = createSprite(600,320,10,40);
  obstacle.addImage(obstacleImage)
  obstacle.lifetime = 300;
  obstacle.velocityX = -4;
  obstacle.scale = 0.2
}
}




