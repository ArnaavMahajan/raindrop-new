var rain;

function setup() {
  createCanvas(800,400);
rain=rect(random,random,10,10);
}

function draw() {
rain.x=(random(0,400));
rain.y=(random(0,200));
rain.shapeColor="green";
rain.velocityY=1;

  background(0,0,0);  
  drawSprites();
}