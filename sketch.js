
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,600,40);
	bob1 = new Bob(200,640,40);
	bob2 = new Bob(300,640,40);
	bob3 = new Bob(400,640,40);
	bob4 = new Bob(500,640,40);
	bob5 = new Bob(600,640,40);

	rope1=new Rope(bob1.body,roof1.body,-180,0);
	rope2=new Rope(bob2.body,roof1.body,-100,0);
	rope3=new Rope(bob3.body,roof1.body,0,0);
	rope4=new Rope(bob4.body,roof1.body,100,0);
	rope5=new Rope(bob5.body,roof1.body,180,0);

	Engine.run(engine);
  
}


function draw() {
 
  background("white");
    roof1.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

