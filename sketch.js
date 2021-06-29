var box;



function setup() {

  createCanvas(400,400);

  box=createSprite(100,200,50,50);
}

function draw() 
{
  background("white");

  if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+20;
  }
  if (keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-20;
  }
  drawSprites();
}




