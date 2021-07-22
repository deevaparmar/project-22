const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
let engine;
let world;



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  
  world = engine.world;
  
  var root_options = {
    isStatic :true
  }    
  root = Bodies.rectangle(400,100,250,10,root_options)
  World.add(world, root)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options = {
    isStatic : false ,
    restitution : 1,
    density : 2
  }
  ball1 = Bodies.circle(320,380,20, ball_options)
  World.add (world, ball1)
  
  ball2 = Bodies.circle(360,380,20, ball_options)
  World.add (world, ball2)

  ball3 = Bodies.circle(400,380,20, ball_options)
  World.add (world, ball3)

  ball4 = Bodies.circle(440,380,20, ball_options)
  World.add (world, ball4)

  ball5 = Bodies.circle(480,380,20, ball_options)
  World.add (world, ball5)

  rope1 = new rope(ball1,root, -80, 0)
  rope2 = new rope(ball2,root, -40, 0)
  rope3 = new rope(ball3, root, 0, 0)
  rope4 = new rope(ball4,root, 40, 0)
  rope5 = new rope(ball5,root, 80, 0)
  Engine.run (engine)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display ()
  rope5.display()
rect (root.position.x, root.position.y,250,20)
  
  ellipse(ball1.position.x, ball1.position.y,30,30)
  ellipse(ball2.position.x, ball2.position.y,30,30)
  ellipse(ball3.position.x, ball3.position.y,30,30)
  ellipse(ball4.position.x, ball4.position.y,30,30)
  ellipse(ball5.position.x, ball5.position.y,30,30)
  
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce (ball1,ball1.position,{x: -50, y: -50})
  }
}



