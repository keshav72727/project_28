
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango0;
var world,boy;
var chain1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,150,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(1150,100,30);
	mango5=new mango(1100,100,30);
	mango6=new mango(1000,110,30);
	mango7=new mango(1120,150,30);
	mango8=new mango(1000,200,30);
	mango9=new mango(1050,150,30);
	mango10=new mango(900,170,30);


	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	stoneObj=new Stone(237,420,30);

	chain1=new Chain(stoneObj.body,{x:237,y:420});
	
	Engine.run(engine);

}

function draw() {

  background("white");
  //Add code for displaying text here!
  textSize(30)
  fill(66,133,244);
  text("Press Space Key and any key to Get a Second Chance To Play !!",70,50);
  image(boy ,200,340,200,300);
  

	detectcollision(stoneObj,mango1);
	detectcollision(stoneObj,mango2);
	detectcollision(stoneObj,mango3);
	detectcollision(stoneObj,mango4);
	detectcollision(stoneObj,mango5);
	detectcollision(stoneObj,mango6);
	detectcollision(stoneObj,mango7);
	detectcollision(stoneObj,mango8);
	detectcollision(stoneObj,mango9);
	detectcollision(stoneObj,mango10);

	keyPressed();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

 chain1.display();

  stoneObj.display();
  groundObject.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
chain1.fly();
}

function keyPressed(){
	if (keyCode == 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		chain1.attach(stoneObj.body);
	}
}

function detectcollision(lstone,lmango){
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
