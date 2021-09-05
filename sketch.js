const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var ground;
var rope, ball;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,900,1200,20)

    box1 = new Box(700,890,70,70);
    box2 = new Box(800,890,70,70);

    box3 = new Box(700,820,70,70);
    box4 = new Box(800,820,70,70);

    box5 = new Box(700,750,70,70);
    box6 = new Box(800,750,70,70);

    box7 = new Box(700,680,70,70);
    box8 = new Box(800,680,70,70);

    box9 = new Box(700,610,70,70);
    box10 = new Box(800,610,70,70);

    box11 = new Box(700,540,70,70);
    box12 = new Box(800,540,70,70);

    rope = new Rope (ball.body, {x: 500, y: 500});
    ball = new Ball (550, 500, 80);


    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
  
    box5.display();
    box6.display();

    box7.display();
    box8.display();

    box9.display();
    box10.display();

    box11.display();
    box12.display();

    rope.display();
    ball.display();
}