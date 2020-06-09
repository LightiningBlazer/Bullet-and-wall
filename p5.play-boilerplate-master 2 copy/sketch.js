var speed, weight;
var bullet, wall, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=(30,52);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet=createSprite(50,200,100,20);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(Collided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor= color(0,255,0);
    }
  }
  drawSprites();
}

function Collided(abullet, awall){

  bulletRightEdge=abullet.x + abullet.width;
  wallLeftEdge=awall.x;
  if(bullet.RightEdge>=wallLeftEdge){
    return true
  }
  return false
}