
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FGrp, OGrp,FImg,OImg;
var score
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FImg=loadImage("banana.png");
  OImg=loadImage("obstacle.png")
 
}



function setup() {

  createCanvas(600,600);
  background(380)
   monkey = createSprite(100,430)  ;
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2; 
  monkey.setCollider("circle",0,0,40);
  monkey.debug = true;
  monkey.setCollider("circle",0,0,40);
  
  ground   = createSprite(600,500,400,24);
  ground.velocityX=-8;
  ground.width=ground.x/2;
 
  FGrp=createGroup();
  OGrp=createGroup();
}


function draw() {
  // to make monkey jump
 if(keyDown("space")&& monkey.y >= height-100) {
        monkey.velocityY = -15;
 }
  monkey.collide(ground);
  Food();
  Obstacles();
  
  drawSprites();
  
}

function Food(){
  if (frameCount % 60 === 0) {
    food = createSprite(300);
    food.y = Math.round(random(120,230));
    food.addImage(FImg);
    food.velocityX = -3;
    food.lifetime = 40;
    food.scale=0.2;
   FGrp.add(food);
    }
}

function Obstacles(){
  if (frameCount % 300 === 0) {
    ground = createSprite(300,500);
    ground.y = Math.round(random(120,230));
    ground.addImage(OImg);
    ground.velocityX = -3;
    ground.lifetime = 340;
    ground.scale=0.2;
   OGrp.add(ground);
    }
}






