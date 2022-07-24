var fundo,fundomov;
var sus,susmov;
var thanos;
var enemy;
var parede1,parede2;




function preload(){
    fundomov = loadImage("estrada.png");
    susmov = loadImage("amogus.gif");
    enemy = loadImage("thanos.gif")

    
}

function setup(){
    createCanvas(1000,1000);
    fundo = createSprite(500,200,100,100);
    fundo.addImage("stop",fundomov);
    fundo.scale = 1.2;
    sus = createSprite(500,500,100,100);
    sus.addImage("put",susmov);
    sus.scale = 0.3;
    parede2 = createSprite(740,200,10,1000);
    parede1 = createSprite(250,200,10,1000);
}

//

function draw(){
background("white")
    parede1.visible = false;
    parede2.visible = false;
    sus.collide(parede1);
    sus.collide(parede2);

    fundo.velocityY = 2;


   if (fundo.y > 500){
    fundo.y = fundo.width/2;
    }

    if (keyDown("right")){
        sus.velocityX = 6;
    }

    if (keyDown("left")){
        sus.velocityX = -6;
    }
  
    
    if (thanos.isTouching(sus)){
        sus.visible = false;

    }







    
    



//
    maligno();
    drawSprites();
}
function maligno(){
    if (frameCount%50 === 0){
       var thanos = createSprite(600,0,20,20);
        thanos.velocityY = 4;
        thanos.x = random(350,700);
        thanos.addImage(enemy);
        thanos.depth = 3;
        thanos.lifetime = 200;
    }


    





}