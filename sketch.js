
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Hammer1 = new Hammer(400,350)
stone1 = new Stone(600,320,60,60)
Ground1 = new Ground(400,height,2000,20)
rubber1 = new Rubber(550,230,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  

Hammer1.display();
stone1.display();
Ground1.display();
rubber1.display();


  drawSprites();
 
}



