
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:400})
  
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
  Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectCollision(mango1,stoneObj);
  detectCollision(mango2,stoneObj);
  detectCollision(mango3,stoneObj);
  detectCollision(mango4,stoneObj);
  detectCollision(mango5,stoneObj);
  detectCollision(mango6,stoneObj);
  detectCollision(mango7,stoneObj);
  detectCollision(mango8,stoneObj);
  detectCollision(mango9,stoneObj);
  detectCollision(mango10,stoneObj);
  detectCollision(mango11,stoneObj);
  detectCollision(mango12,stoneObj);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectCollision(obj1,obj2){
    var obj1Pos = obj1.body.position;
    var obj2Pos = obj2.body.position;

    var distance = dist(obj1Pos.x, obj1Pos.y, obj2Pos.x, obj2Pos.y);
    if (distance<=obj1.r+obj2.r){
      Matter.Body.setStatic(obj1,false);
    }

  }

  