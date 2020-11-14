
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;

var log1,log2,log3;
var ground;
var tissue;
function preload(){
	dustIMg= loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log(600,600,175,20);
	log2 = new Log(680,600,20,200);
	log3 = new Log(500,600,20,200);

	ground = new Ground(400,680,800,20);

	tissue = new Ball(150,200,70);


}


function draw() {
  background("yellow");

  Engine.update(engine);
  
  log2.display();
  log3.display();
  ground.display();
  log1.display();
  
  image(dustIMg,600,520,175,160);
  tissue.display();
  
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Body.applyForce(tissue.body,tissue.body.position,{x:120,y:-130})
}
}