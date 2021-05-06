var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions=[];

var ground;
var engine,world;
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
//var play;
//var end;
var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);
  //particle=new Particle(10,10,10);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   Point();

  if (turn===5){
    gameState="end";
   
    text("GAME OVER",380,340);

  }
   
  ground.display()
  

   text(200,25,650);
   text(100,105,650);
   text(500,185,650);
   text(100,265,650);
   text(300,345,650);
   text(300,425,650);
   text(100,505,650);
   text(500,585,650);
   text(100,665,650);
   text(200,745,650);
   text("score = "+score,10,10)
   console.log(turn);
   console.log(gameState);

  }

  function mousePressed(){
    if(gameState!=="end"){
      turn=turn+1;
      particle=new Particle(mouseX,10,10);
      
    }
  }
function Point(){
 
if(particle!=null){
   particle.display();
   
   if(particle.body.position.y>770)
   {
       if(particle.body.position.x<300){
       score=score+500;
       particle=null;
   }
   else if(particle.body.position.x<600 && particle.body.position.x>301 ){
        score=score+100; 
        particle=null;
   }
   else if(particle.body.position.x<900 && particle.body.position.x>601){
       score=score+200;
       particle=null;
   }

   
}

 }      

}


 