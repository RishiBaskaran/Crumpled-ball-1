var bin1,bin2,bin3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bin1 = new Bin(1250,610,20,100);
	
	bin2 = new Bin(1100,610,20,100);
	bin3 = new Bin(1175,650,168,20);
	paperball = new Paperball(300,350,15);
	ground = new Ground(800,680,1600,20)
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  
  drawSprites();
  bin1.display();
  bin2.display();
  bin3.display();
  paperball.display();
  ground.display();
  keyPressed();
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}
}


