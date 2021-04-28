const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;
var canvas;
var PCplayer, PCplayerImg;
var boundary1;
var bullet, bulletImg;



function preload(){
    backgroundImg = loadImage("images/images.jpg");
    PCplayerImg = loadImage("images/h.png");
    bulletImg = loadImage("images/bullet.png")
}
function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    

     PCplayer = createSprite(500,700,100,100);
     PCplayer.addImage(PCplayerImg);
     PCplayer.scale = 0.5

     target1 = createSprite(850,500,80,80);
     target1.velocityX = 5;    

     target2 = createSprite(650,350,80,80);
     target2.velocityX = 5;    

     target3 = createSprite(450,250,80,80);
     target3.velocityX = 5;    

     target4 = createSprite(250,100,80,80);
     target4.velocityX = 5;    
     
     boundary1 = createSprite(1190,400,5,800);
     boundary2 = createSprite(10,400,5,800);
   
}

function draw(){
     background (backgroundImg);

     Engine.update(engine);

     // to move the target
         if(target1.isTouching(boundary1)){
          target1.velocityX = target1.velocityX * (-1);
         }

         if(target2.isTouching(boundary1)){
            target2.velocityX = target2.velocityX * (-1);
         }

         if(target3.isTouching(boundary1)){
            target3.velocityX = target3.velocityX * (-1);
         }

         if(target4.isTouching(boundary1)){
            target4.velocityX = target4.velocityX * (-1);
         }

         if(target1.isTouching(boundary2)){
            target1.velocityX = target1.velocityX * (-1);
         }
         
         if(target2.isTouching(boundary2)){
            target2.velocityX = target2.velocityX * (-1);
          }
          
          if(target3.isTouching(boundary2)){
            target3.velocityX = target3.velocityX * (-1);
          }
         
          if(target4.isTouching(boundary2)){
            target4.velocityX = target4.velocityX * (-1);
          }

             // to move the user with mouse
             PCplayer.x=mouseX;
         
              if(keyWentDown("space")) {
                 
                 
               spawnBullets();          
              }

             
  

         
          drawSprites();
}

function spawnBullets(){
   bullet = createSprite(50,700,10,10);
   bullet.addImage(bulletImg);
   scale(bulletImg = 0.1);
   //position of the bullete initially
   bullet.x=PCplayer.x;
   bullet.velocityY -= 10   
}