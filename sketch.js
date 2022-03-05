const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var world;
var particle;
var divisions = [];
var plinkos = [];

var divisionHeight=300;

var k;
var j;

var score =0;

//variable count
var v=0;

var gameState;

function setup()
{
  createCanvas(800, 800);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }    
  
  gameState ="play";

}

function mousePressed()
{
  if(gameState!="end")
  {
    particle = new Particle(mouseX,10,10,10);
  }
}
 
function draw() 
{
  background("black");
  textSize(20)
  ground.display();
  text("Score : "+score,20,30);
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
   }

   mousePressed();

  //  if(frameCount%60==0){
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  //  }

   for (var k = 0; k < divisions.length; k++)
   {     
     divisions[k].display();
   }

    text("500",23,530);
    text("500",103,530);
    text("500",183,530);
    text("500",263,530);
    text("100",343,530);
    text("100",423,530);
    text("100",503,530);
    text("200",583,530);
    text("200",663,530);
    text("200",743,530);

    if(particle != null)
    {
      particle.display();
      if(particle.body.position.y>760)
      {
        if(particle.body.position.x< 300)
        {
          score += 500;
          // v++;
          particle = null;
        }
      }
    }

    if(particle!= null)
    {
      particle.display();
      if(particle.body.position.y>760)
      {
        if(particle.body.position.x< 600)
        {
          score += 100;
          // v++;
          particle = null;
        }
      }
    }
    
    if(particle!= null)
    {
      particle.display();
      if(particle.body.position.y>760)
      {
        if(particle.body.position.x< 900)
        {
          score += 200;
          // v++;
          particle = null;
        }
      }
    }

    if(v>=5)
     gameState=="end";

     drawSprites();

  }   