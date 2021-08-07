
var snowflake,snowflakeImg
var backgroundImg


function preload(){
  backgroundImg=loadImage("snow2.jpg");
  snowflakeImg=loadImage("snow5.webp")
}


function setup() {
  createCanvas(1050,650);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  snow()
  }

function snow(){
  if(frameCount%50===0){
    snowflake = createSprite(random(0,800), 0, 50, 50);
    snowflake.velocityX = -2;
    snowflake.velocityY = 4;
    snowflake.addImage(snowflakeImg);
snowflake.scale = 0.3;
}
}