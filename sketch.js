const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Ground(400, 100,600, 50);

	bobObject1 = new Ball(200, 600)
  bobObject2 = new Ball(300, 600)
	bobObject3 = new Ball(400, 600)
	bobObject4 = new Ball(500, 600)
  bobObject5 = new Ball(600, 600)
	
  rope1 = new Rope(bobObject1.body, roof1.body, -196, 0)
  rope2 = new Rope(bobObject2.body, roof1.body, -96, 0)
  rope3 = new Rope(bobObject3.body, roof1.body, 4, 0)
  rope4 = new Rope(bobObject4.body, roof1.body, 104, 0)
  rope5 = new Rope(bobObject5.body, roof1.body, 204, 0)
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  

}