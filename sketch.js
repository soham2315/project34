const Engine = Matter.Engine;
 const World = Matter.World;
const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;


var engine, world;
var block1, block2, block3,block4;
var hero,monster,fly,ground;

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  fly = new Fly(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background(0);
  Engine.update (engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  fly.display();
  monster.display();

}

function mouseDragged(){
Matter.body.setPosition(hero.body,{x:mouseX,y:mouseY});

}

