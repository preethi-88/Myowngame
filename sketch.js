var bunny,bunnyimg,lionimg
var ground;
var carrot;
var newbase,newbase2g;
var gamecount =0;
function preload(){
  bunnyimg = loadImage("bun.png")
  lionimg = loadImage("lion8.png")
  carrotimg = loadImage("carrot.png")
}
function setup() {
  createCanvas(1200,600);
  bunny = createSprite(50,0,20,30);
  bunny.addImage("bunny",bunnyimg)
  
  ground = createSprite(600,580,1200,20);
  carrot = createSprite(1180,30,30,20)
  carrot.addImage(carrotimg)
  carrot.shapeColor ="orange"
  base1 = createSprite(100,530,50,10);
  base1.shapeColor = "purple"
  base2 = createSprite(300,510,50,10);
  base2.shapeColor = "purple"
  base3 = createSprite(400,490,50,10);
  base3.shapeColor = "purple"
  base4 = createSprite(600,450,50,10);
  base4.shapeColor = "purple"
  base5 = createSprite(800,390,50,10);
  base5.shapeColor = "purple"
  base6= createSprite(900,350,50,10);
  base6.shapeColor = "purple"
  base7= createSprite(1000,300,50,10);
  base7.shapeColor = "purple"
  base8= createSprite(1100,200,50,10);
  base8.shapeColor = "purple"
  base9= createSprite(1150,100,50,10);
  base9.shapeColor = "purple"
  lion1 = createSprite(700,535,40,20);
  lion1.addImage("lion",lionimg)
  //lion1.debug = "true"
  lion1.setCollider("rectangle",0,0,40,90)
  lion2 = createSprite(200,535,40,20);
  lion2.addImage("lion",lionimg)
  lion2.setCollider("rectangle",0,0,40,90)
  lion3 = createSprite(500,535,40,20);
  lion3.addImage("lion",lionimg)
  lion3.setCollider("rectangle",0,0,40,90)
  lion4 = createSprite(1090,535,40,20);
  lion4.addImage("lion",lionimg)
  lion4.setCollider("rectangle",0,0,40,90)
  newbaseg = createGroup();
  newbasegroup = createGroup();
  newbasegr = createGroup();
  newbasegro = createGroup();



}
function draw(){
  background("black");
  //jump when the space key is pressed
  if(keyDown("space")) {
    bunny.velocityY = -4;
    
}

//add gravity
bunny.velocityY = bunny.velocityY + 1
bunny.collide(base1)
bunny.collide(base2)
bunny.collide(base3)
bunny.collide(base4)
bunny.collide(base5)
bunny.collide(base6)
bunny.collide(base7)
bunny.collide(base8)
bunny.collide(base9)
bunny.collide(ground)


if (keyDown(LEFT_ARROW)) {
     bunny.x =bunny.x-1;
    
}
if (keyDown(RIGHT_ARROW)) {
     bunny.x =bunny.x+2;
    
}
createbase()
bunny.collide(newbaseg)
bunny.collide(newbasegroup)
bunny.collide(newbasegr)
bunny.collide(newbasegro)

if (bunny.isTouching(lion1)||bunny.isTouching(lion2)||bunny.isTouching(lion3)||bunny.isTouching(lion4)){
  bunny.x =50
  bunny.y = 550
  gamecount =gamecount+1

}


  drawSprites();
  if(bunny.isTouching(carrot)){
    bunny.destroy()
    textSize(30)
    stroke('green')
    fill("yellow")
    text("You Win",600,400)

  }
  if(gamecount>3){
    bunny.destroy()
    textSize(30)
    stroke('green')
    fill("yellow")
    text("Game Over",600,400)
    //gamecount =0;
  }

}
function createbase() {
  if (frameCount % 250 === 0) {
  
  newbase = createSprite(200,10,50,10);
  newbase.shapeColor = 'yellow'
  
  newbase.velocityY =2;
  
  newbase.lifetime = 233;
  newbaseg.add(newbase);
  newbase2 = createSprite(500,10,50,10);
  newbase2.shapeColor = 'yellow'
  
  newbase2.velocityY =2;
  
  newbase2.lifetime = 233;
  newbasegroup.add(newbase2);
  newbase3 = createSprite(700,10,50,10);
  newbase3.shapeColor = 'yellow'
  
  newbase3.velocityY =2;
  
  newbase3.lifetime = 233;
  newbasegr.add(newbase3)
  newbase4 = createSprite(1050,10,50,10);
  newbase4.shapeColor = 'yellow'
  
  newbase4.velocityY =5;
  
  newbase4.lifetime = 233;
  newbasegro.add(newbase4)
  }
}
