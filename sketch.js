
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var rand,rand1;
var bananaGroup,obstaclesGroup;
var survivalTime=0;
var score=0;
var PLAY = 1;
var END = 0;
var GAMESTATE = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  ground = createSprite(300,360,1200,5)
  monkey = createSprite(40,340,20,20)
 monkey.addAnimation("running",monkey_running)
   monkey.scale=0.1
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
if(GAMESTATE===PLAY)
  {
  background("cyan");
  if(keyDown("space")&& monkey.y>310)
    {
      monkey.velocityY=-12
    }
  monkey.velocityY=monkey.velocityY+0.4
  monkey.collide(ground)
  
  ground.velocityX=-7;
    if(monkey.isTouching(bananaGroup))
      {
        bananaGroup.destroyEach();
        score=score+1
      }
}
  text("score="+score,20,100)
      ground.x=ground.width/2
    stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time"+survivalTime,300,50)
  
  Banana();
  
  Obstacles();
  
  drawSprites();
}
function Banana()
{
  if(frameCount%80===0)
    {
  rand = Math.round(random(120,200));
  banana = createSprite(390,rand,20,20);
  
  banana.addImage("banana",bananaImage)
  banana.velocityX=-4
  banana.scale=0.1
    
  banana.lifetime=100;
    
  bananaGroup.add(banana)
    }
}


function Obstacles()
{
  if(frameCount%300===0)
    {
 
  obstacle = createSprite(470,320,20,20);
  
  obstacle.addImage("rock",obstacleImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
    
  obstacle.lifetime=120;
    
  obstacleGroup.add(obstacle)
    }
}










