var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = ("blue");
  car.velocityX = speed;

  wall = createSprite(rect(1500,200,60,height/2));
  wall.shapeColor = ("black");
  wall.x = 1000;
  wall.y = 200;
  wall.width = 50;
  wall.height = 400;
  
}

function draw() {
  background(200);
  
  car.collide(wall);

  deformation = ((0.5 * weight * speed * speed)/22500);
  

  if(deformation<=100){
    car.shapeColor = ("green")
  } else if(deformation>100 && deformation<=180){
    car.shapeColor = ("yellow");
  } else{
    car.shapeColor = ("red");
  }

  drawSprites();
}