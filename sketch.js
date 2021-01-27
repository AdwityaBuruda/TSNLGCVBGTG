const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;
var score=0;
var backgroundImg;

function preload() {
  getBackgroundImg();
}

function setup() {
 createCanvas(1600,700);
engine = Engine.create();
world = engine.world;

polygon = new Polygon(250, 300, 25);

floor1 = new Ground(390,400,250,10);
floor2 = new Ground(700,200,200,10);


box1 = new Box(300, 375, 30, 40,"blue");
box2 = new Box(330, 375, 30, 40, "blue");
box3 = new Box(360, 375, 30, 40, "blue");
box4 = new Box(390, 375, 30, 40, "blue");
box5 = new Box(330, 335, 30, 40, "yellow");
box6 = new Box(360, 335, 30, 40, "yellow");
box7 = new Box(390, 335, 30, 40, "yellow");
box8 = new Box(360, 295, 30, 40, "pink");
box9 = new Box(390, 295, 30, 40, "pink");
box10 = new Box(390, 255, 30, 40, "green");
block1 = new Box(640, 175, 30, 40, "blue");
block2 = new Box(670, 175, 30, 40, "blue");
block3 = new Box(700, 175, 30, 40, "blue");
block4 = new Box(730, 175, 30, 40, "blue"); 
block5 = new Box(640, 135, 30, 40, "yellow");
block6 = new Box(670, 135, 30, 40, "yellow");
block7 = new Box(700, 135, 30, 40, "yellow");
block8 = new Box(640, 95, 30, 40, "pink");
block9 = new Box(670, 95, 30, 40, "pink");
block10 = new Box(640, 75, 30, 40, "green");

sling= new SlingShot(polygon.body,{x:200, y:250});

Engine.run(world, engine);
}
function draw() {

  if(backgroundImg) { 
  background(backgroundImg);
  }
  else{
    background("black");
  }

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  
  
    
  


   
  Engine.update(engine);
  floor1.display();
  floor2.display();
 
  polygon.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  sling.display();

  drawSprites();

  textSize(30);
    text("Score:"+score, width-300,50);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x: 250, y:300});
    sling.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}