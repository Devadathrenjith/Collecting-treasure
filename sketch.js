var cashImage,pathImage,cash,path,cashGroup,jewel,jewelImage,
    jewelGroup,diamond,diamondImage,diamondGroup,sword,swordImage,
    swordGroup,boy,boyAnimation,gameOverImage,gameOver,hurdle,
    hurdleImage,
    hurdleGroup;
var treasure = 0
var END =0
var PLAY = 1
var gameState = PLAY
function preload(){
 cashImage = loadImage("cash.png")  
  pathImage = loadImage("Road.png")
  jewelImage = loadImage("jwell.png")  
  diamondImage = loadImage("diamonds.png") 
  swordImage = loadImage("sword.png")
  boyImg = loadAnimation("runner1.png","runner2.png")
  gameOverImage = loadAnimation("gameOver.png")
  hurdleImage = loadImage("1.png")
}

function setup(){

  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 4
  boy = createSprite(70,330,20,20)
  boy.addAnimation("SahilRunning",boyImg)

  boy.scale = 0.08
  
  cashGroup = new Group();
  jewelGroup = new Group();
  diamondGroup = new Group();
swordGroup = new Group();
  hurdleGroup = new Group();
}

function draw() {

  background(0);
  drawSprites();
  textSize(20)
  fill("white")
  text("Treasure:"+treasure,30,30)
  noFill();
  
if (gameState == PLAY){
  boy.y = World.mouseY
  boy.x = World.mouseX
   if(path.y > 2500) {
  path.y = height/2
  }
  createCash();
  createJewel();
  createDiamond();
  createSword();
  createHurdle()
  boy.setCollider("circle",0,0,800)
  swordGroup.setDepthEach(1)
 diamondGroup.setDepthEach(1)
  jewelGroup.setDepthEach(1)
  cashGroup.setDepthEach(1)
  hurdleGroup.setDepthEach(1)
  if(boy.isTouching(diamondGroup)){
    diamondGroup.destroyEach()
    treasure = treasure + 150
  }
   
  if(boy.isTouching(cashGroup)){
    cashGroup.destroyEach()
    treasure = treasure + 50
  }
   
  if(boy.isTouching(jewelGroup)){
   jewelGroup.destroyEach()
    treasure = treasure + 100
  }
  if(boy.isTouching(swordGroup)||boy.isTouching(hurdleGroup)){
    gameState = END
  }
}else if(gameState == END){
 path.velocityY = 0
 cashGroup.setVelocityYEach(0)
  diamondGroup.setVelocityYEach(0)
  swordGroup.setVelocityYEach(0)
  jewelGroup.setVelocityYEach(0)
  hurdleGroup.setVelocityYEach(0)
   jewelGroup.destroyEach()
  cashGroup.destroyEach()
  swordGroup.destroyEach()
   hurdleGroup.destroyEach()
  diamondGroup.destroyEach()
  boy.addAnimation("SahilRunning",gameOverImage)
  boy.scale = 1
}
}

function createCash(){
 if(World.frameCount % 80 == 0){
  cash = createSprite(Math.round(random(50,350)),40,10,10)
  cash.addImage(cashImage)
   cash.scale = 0.13
   cashGroup.add(cash)
   cash.lifetime=150 
   cash.velocityY = 3
  
}}
function createJewel(){
 if(World.frameCount % 50 == 0){
  jewel = createSprite(Math.round(random(40,370)),40,10,10)
  jewel.addImage(jewelImage)
   jewel.scale = 0.13
   jewelGroup.add(jewel)
   jewel.lifetime=150 
   jewel.velocityY = 3
  
}}
function createDiamond(){
 if(World.frameCount % 40 == 0){
  diamond = createSprite(Math.round(random(30,400)),40,10,10)
  diamond.addImage(diamondImage)
   diamond.scale = 0.03
   diamondGroup.add(diamond)
   diamond.lifetime=150 
  diamond.velocityY = 3
 }}
function createSword(){
 if(World.frameCount % 30 == 0){
  sword = createSprite(Math.round(random(100,380)),40,10,10)
  sword.addImage(swordImage)
   sword.scale = 0.1
   swordGroup.add(sword)
   sword.lifetime=150 
 sword.velocityY = 3
 }}
function createHurdle(){
 if(World.frameCount % 40 == 0){
  hurdle = createSprite(Math.round(random(100,380)),40,10,10)
  hurdle.addImage(hurdleImage)
   hurdle.scale = 0.1
   hurdleGroup.add(hurdle)
  hurdle.lifetime=150 
 hurdle.velocityY = 3
 }}