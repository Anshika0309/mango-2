
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,700,30);
	mango2=new mango(1200,80,30);
	mango3=new mango(1100,110,30);
	mango4=new mango(900,850,30);
	mango5=new mango(1000,150,30);
	mango6=new mango(900,120,30);
	mango7=new mango(1000,220,30);

	treeObj=new tree(1050,580);
	stoneObj = new Stone(235,420,30);
	groundObject=new ground(width/2,600,width,20);
	slingObj = new Slingshot(stoneObj.body, {x:235, y:240});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  text("Please press space to get a second chance to play",10,10);
  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();
  slingObj.display();
  stoneObj.display();

  detectCollision();
}



function detectCollision(stone,mango){
	mangoBodyposition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyposition.x, mangoBodyposition.y);
	if(distance <=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}

}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingObj.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235 , y: 420});
        slingObj.attach(stoneObj.body);
    }
}