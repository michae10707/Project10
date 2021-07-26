var ship11,shipImg,edges;
var seaImg;


function preload()
{
seaImg=loadImage("sea.png");
//shipImg = loadAnimation( "ship1.png", "ship2.png", "ship3.png", "ship4.png");
}

function setup(){
  createCanvas(400,400);
  seaImg=createSprite(0, 0, 400, 400);
  
  //ship1=createSprite(200, 200, 40, 40);
 // ship1.addAnimation("running", shipImg)

  edges = createEdgeSprites();

   //adding scale and position to ship1
  //ship1.scale = 0.5;
  //ship1.x = 50
  
}

function draw() {
  
 // sea1.addImage(seaImg);
 //background(seaImg);
 background("red");
 //console.log(ship1.y);
  //code to reset the background
  if(sea1.x <0){
    sea1.x = sea1.width/2;
  }
  drawSprites();
}