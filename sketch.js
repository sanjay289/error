const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,900,1000,100);
    box1=new Box(800,800,50,50);
    box2 = new Box(800, 750, 50, 50);
    box3 = new Box(800, 700, 50, 50);
    box4 = new Box(800, 650, 50, 50);
    box5 = new Box(800, 600, 50, 50);
    box6 = new Box(800, 550, 50, 50);

    box7 = new Box(900, 800, 50, 50);
    box8 = new Box(900, 750, 50, 50);
    box9 = new Box(900, 700, 50, 50);
    box10 = new Box(900, 650, 50, 50);
    box11= new Box(900, 600, 50, 50);
    box12= new Box(900, 550, 50, 50);

    ball=new Ball(500,600,80,80);
    rope=new Rope(ball.body,{x:500,y:50});

}
function draw(){
    background("black");
    ground.display();
    box1.display();
    box2.display();
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
    ball.display();
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,mouseY});
}
