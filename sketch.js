var Solar_sys_Img;
var sun;
var mars;
var jupiter;
var mercury, earth, venus, neptune, uranus, saturn;
var gamestate = 0;

var sun_img;
var mercury_img;
var venus_img;
var earth_img;
var mars_img;
var jupiter_img;
var saturn_img;

function preload(){
    Solar_sys_Img = loadImage("Solar_System.jpg");
    sun_img = loadImage("Sun.gif");
    mercury_img = loadImage("Mercury/Mercury.gif");
    venus_img = loadImage("Venus/Venus.gif");
    earth_img = loadImage("earth/earth.gif");
    mars_img = loadImage("Mars/Mars.gif");
    jupiter_img = loadImage("Jupiter/jupiter.gif");
    saturn_img = loadImage("Saturn/saturn.gif");
    
}

function setup(){
createCanvas(displayWidth-10,displayHeight-10);

if (gamestate== 0){
sun = createSprite(displayWidth-1550,displayHeight - 550,400,600);
mars  =createSprite(displayWidth-995 , displayHeight - 630, 50,50);
jupiter = createSprite(displayWidth-800 , displayHeight - 620, 125,125)
earth = createSprite(displayWidth-1075 , displayHeight - 580, 60,60)
venus = createSprite(displayWidth-1190 , displayHeight - 540, 50,50)
mercury = createSprite(displayWidth-1300 , displayHeight - 515, 50,50)
saturn = createSprite(displayWidth-595 , displayHeight - 685, 125,125)
uranus  =createSprite(displayWidth-440 , displayHeight - 725,100,100)
neptune = createSprite(displayWidth-320 , displayHeight - 800, 100,100);
}


}

function draw(){
    if (gamestate == 0){
    background(Solar_sys_Img);
    hide(sun);
    hide(mercury);
    hide(venus);
    hide(earth);
    hide(mars);
    hide(jupiter);
    hide(saturn);
    hide(uranus);
    hide(neptune);
    }
 if (gamestate == 0 && mousePressedOver(sun)){
    gamestate+=1;
    background("black");
    sun_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 )
    sun_det.addImage("Sun_image",sun_img);
    sun_det.scale= 2;
    }

 if (gamestate == 0 && mousePressedOver(mercury)){
     gamestate+=1
     background("black");
     mercury_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
     mercury_det.addImage("Mercury_image",mercury_img);
     mercury_det.scale = 2;

 }

 if (gamestate == 0 && mousePressedOver(venus)){
    gamestate+=1
    background("black");
    venus_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    venus_det.addImage("Venus_image",venus_img);
    venus_det.scale = 1;

}
if (gamestate == 0 && mousePressedOver(earth)){
    gamestate+=1
    background("black");
    earth_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    earth_det.addImage("Earth_image",earth_img);
    earth_det.scale = 2;

}

if (gamestate == 0 && mousePressedOver(mars)){
    gamestate+=1
    background("black");
    mars_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    mars_det.addImage("Mars_image",mars_img);
    mars_det.scale = 3;

}
if (gamestate == 0 && mousePressedOver(jupiter)){
    gamestate+=1
    background("black");
    jupiter_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    jupiter_det.addImage("jupiter_image",jupiter_img);
    jupiter_det.scale = 2;

}

if (gamestate == 0 && mousePressedOver(saturn)){
    gamestate+=1
    background("black");
    saturn_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    saturn_det.addImage("Saturn_image",saturn_img);
    saturn_det.scale = 1.5;

}



    

    
    console.log(gamestate);
    drawSprites();
}

function hide(sprite){
    sprite.visible = false;
}


