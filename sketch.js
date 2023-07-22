var background;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;


function preload() {
background = loadImage(".assets/background.png");

heart1Img = loadImage(".assets/heart_1.png");
heart2Img = loadImage(".assets/heart_2.png");
heart3Img = loadImage(".assets/heart_3.png");

shooterImg = loadImage(".assets/shooter_1.png");
shooter_shooting = loadImage(".assets/shooter_2.png");

zombieImg = loadImage(".assets/zombie.png");

lose = loadImage(".assets/lose.png"); 
winning = loadImage(".assets/win.png");
explosionSound = loadImage(".assets/explosion.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(background);  
  drawSprites();
}