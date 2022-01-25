const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var bola


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  bola = Bodies.circle(200,100,20);
  World.add(world,bola);

  console.log(bola);
}

function draw() {
  background("black");  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,20);

  


}