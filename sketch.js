var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1, box2, box3;
var box1Sprite,box2Sprite,box3Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	
	
	box1Sprite=createSprite(400, 650, 200,20);
	box2Sprite=createSprite(300, 620, 20,100);
	box3Sprite=createSprite(500, 620, 20,100);
	



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	
	box1  = Bodies.rectangle(400, 650, 200,20, {isStatic:true});
	World.add(world, box1);

	box2  = Bodies.rectangle(300, 620, 20,100, {isStatic:true});
	World.add(world, box2);

	box3  = Bodies.rectangle(500, 620, 20,100, {isStatic:true});
	World.add(world, box3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	Render.run(render);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.position.x = box1Sprite.x;
  box1.position.y = box1Sprite.y;
  box2.position.x = box2Sprite.x;
  box2.position.y = box2Sprite.y;
  box3.position.x = box3Sprite.x;
  box3.position.y = box3Sprite.y;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false)
  }
}



