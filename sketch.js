var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);

speed = random(55,90);
thickness = random(22,83);

speed = random(223,321);
weight = random(30,52);

bullet = createSprite(50, 200, 15, 5);


wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor = color(80,80,80);

}


function draw() {
  background(0);  
  

  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){

   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
if(damage > 10){

  wall.shapeColor = color(255,0,0);
}


if(damage < 10){

  wall.shapeColor = color(0,255,0);
}

  }


  drawSprites();
}


function hasCollided(bullet_1, wall_1){

bullet_rightEdge = bullet_1.x + bullet_1.width;
wall_leftEdage = wall_1.x;

if(bullet_rightEdge >= wall_leftEdage){

  return true;
}
else{

  return false;
}


}