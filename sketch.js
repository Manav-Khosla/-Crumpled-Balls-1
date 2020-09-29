
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, 800, 20);
	bin1 = new Dustbin(600, 380, 20, 100);
	bin2 = new Dustbin(700, 380, 20, 100);
	bin3 = new Dustbin(650, height-10, 100, 20);
	paper = new Paper(100, 395, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:200, y:100});
	}
}

