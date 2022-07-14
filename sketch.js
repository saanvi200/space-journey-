var spacebg, rocketimg
var spacebgimg , rocket 


function preload(){
  spacebgimg = loadImage("spacebg.jpg");
  rocketimg = loadImage("rocket.png");
}

function setup(){
  
createCanvas(windowWidth,windowHeight);

spacebg = createSprite(windowWidth, windowHeight)
spacebg.addImage("spacebg", spacebgimg);
spacebg.scale = 2.5

rocket = createSprite(50,160,20,50)
rocket.addImage("rocket", rocketimg)
rocket.scale = 0.5
}

function draw() {
drawSprites()
  
  
  
  
  }



