var PLAY=1;
var END=0;  
var monkey , monkey_running;
var banana ,bananaImage, obstacle,obstacleImage;
var FoodGroup1, obstacleGroup1;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
   ground.x = ground.width /2;
  console.log(ground.x);
  
  FoodGroup1 = createGroup();
  obstacleGroup1 = createGroup();
  
}
 

function draw() {
background("white");
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  
  // adding gravity monkey.velocityY = monkey.velocityY +0.5;
  // add colliding line 
 monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
FoodGroup1.collide(monkey,dothis)// do this is a name of a function which define outside draw
  
if(obstacleGroup1.isTouching(monkey)){
   ground.velocityX = 0;
      monkey.velocityY = 0
   obstacleGroup1.setLifetimeEach(-1);
    FoodGroup1.setLifetimeEach(-1);
  obstacleGroup1.setVelocityXEach(0);
  monkey.velocityY=0;
  FoodGroup1.setVelocityXEach(0);
 
 
     
}
  FoodGroup();
  obstacleGroup();
  
  drawSprites();
  text("Score: "+ score, 500,50);
  //ban is the current banana sprite and mon is monkey sprite
function dothis(ban,mon){
  
  ban.remove();
  score=score+10;
  
}

}


function FoodGroup() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var Food = createSprite(600,120,40,10);
    Food.y = Math.round(random(120,200));
    Food.addImage(bananaImage);
    Food.scale = 0.1;
    Food.velocityX = -3;
    
     //assign lifetime to the variable
    Food.lifetime = 200;
    
    
    //add each cloud to the group
    FoodGroup1.add(Food);
  }
}


function obstacleGroup() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,320,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGroup1.add (obstacle);
  }
}






