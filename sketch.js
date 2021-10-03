const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player, bullet
var ground
var platform1
var platform2
var platform3
var platform4
var platform5
var box1 
var box2
var spawner
var characteranimation1
var characteranimation2
var floor, platform1x, platform2x, box, revimg
var enemyGroup, alienimg1, alienimg2, backgroundimg, idle, bulletimg
function preload() {
characteranimation1 = loadAnimation("images/Player1 - Copy.png", "images/Player2 - Copy.png", "images/Player3 - Copy.png", "images/Player4 - Copy.png", "images/Player5 - Copy.png")
characteranimation2 = loadAnimation("images/Player1.png", "images/Player2.png", "images/Player3.png", "images/Player4.png", "images/Player5.png")
floor = loadImage("images/floor.png")
platform1x = loadImage("images/stand1.png")
platform2x = loadImage("images/stand2.png")
box = loadImage("images/box2.png")
revimg = loadImage("images/playerspawner.png")
alienimg1 = loadAnimation("images/Alien1.png", "images/Alien2.png", "images/Alien3.png")
alienimg2 = loadAnimation("images/Alien1 - Copy.png", "images/Alien2 - Copy.png", "images/Alien3 - Copy.png")
backgroundimg = loadImage("images/alien-worlds-3.jpg")
idle = loadImage("images/idleanimation.png")
bulletimg = loadImage("images/bullet.png")
}

function setup() {
  createCanvas(2000,600);
  engine= Engine.create()
  world = engine.world



  ground=createSprite(1000,599,3000,50)
  

  platform1=createSprite(750,300,200,30)
  platform1.addImage("surface",platform1x)
  platform1.scale = 0.7

  platform2=createSprite(500,400,200,30)
  platform2.addImage("surface",platform1x)
  platform2.scale = 0.7

  platform3=createSprite(1500,500,400,30)
  platform3.addImage("surface", platform1x)
  platform3.scale = 0.7

  platform4=createSprite(1000,350,400,30)
  platform4.addImage("surface",platform1x)
  platform4.scale = 0.7

  platform5=createSprite(1500,300,200,30)
  platform5.addImage("surface",platform1x)
  platform5.scale = 0.7

  platform6=createSprite(1750,400,200,30)
  platform6.addImage("surface",platform1x)
  platform6.scale = 0.7

  platform7=createSprite(910,100,200,30)
  platform7.addImage("surface",platform1x)
  platform7.scale = 0.7

  platform8=createSprite(1347,500,200,30)
  platform8.addImage("surface",platform1x)
  platform8.scale = 0.7

  platform9=createSprite(750,500,200,30)
  platform9.addImage("surface",platform1x)
  platform9.scale = 0.7

  platform10=createSprite(1000,100,200,30)
  platform10.addImage("surface",platform1x)
  platform10.scale = 0.7

  platform11=createSprite(500,400,200,30)
  platform11.addImage("surface",platform1x)
  platform11.scale = 0.7

  platform12=createSprite(1500,300,200,30)
  platform12.addImage("surface",platform1x)
  platform12.scale = 0.7

  box1=createSprite(500,525,125,100)
  box1.addImage("boxes",box)
  box1.scale = 0.4

  box2=createSprite(1250,525,125,100)
  box2.addImage("boxes",box)
  box2.scale = 0.4

  spawner=createSprite(200,475,400,200)
  spawner.addImage("reviver",revimg)
  spawner.scale = 0.5

  player=createSprite(250,500,100,100)
  player.scale = 0.30000

  enemyGroup = new Group()


  Engine.run(engine)
}

function draw() {
  Engine.update(engine)
  background(backgroundimg); 

  camera.x=player.x
  camera.y=player.y
 
  player.velocityY = player.velocityY +0.5

 player.collide(ground)
player.collide(platform1)
 player.collide(platform2)
 player.collide(platform3)
 player.collide(platform4)
 player.collide(platform5)
 player.collide(platform6)
 player.collide(platform7)
 player.collide(platform8)
 player.collide(platform9)
 player.collide(platform10)
 player.collide(platform11)
 player.collide(platform12)



spawnAliens()

  if(keyDown("space")){
    bullet = createSprite(player.x, player.y - 15, 7,3 )
    bullet.addImage("pew pew", bulletimg)
    bullet.scale = 0.05
    if(player.x = +1){
      bullet.velocityX = 10
    }
    else if(player.x = -1){
      bullet.velocityX = -10
    }
    
  }
  

  if(keyDown("d")){
    player.velocityX = 10
    player.addAnimation("playerright", characteranimation2)

  }
  if(keyDown("a")){
    player.velocityX = -10
    player.addAnimation("playerright", characteranimation1)

  } 
  if(keyWentDown("w")){
    player.y = player.y -100 

  } 


  if(keyWentUp("a")){
    player.velocityX = 0

  }
  if(keyWentUp("d")){
    player.velocityX = 0
  } 
  if(keyWentUp("w")){
    player.velocityY = 0
  } 
  


 
  ground.display()
  platform1.display()
  platform2.display()
  platform3.display()
  platform4.display()
  platform5.display()
  platform6.display()
  platform7.display()
  platform8.display()
  platform9.display()
  platform10.display()
  platform11.display()
  platform12.display()

  
  box1.display()
  box2.display()
  spawner.display()
  player.display()
  drawSprites();
}

function spawnAliens(){

  if(frameCount % 60 === 0){
   var alien = createSprite(2000,599,100,100)
     alien.scale = 0.4

   
     alien.addAnimation("running", alienimg1)
     alien.collide(ground)
  
     enemyGroup.add(alien)}
  }