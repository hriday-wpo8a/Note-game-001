var note1,note2,note3,note4,note5;
var note1Image,note2Image,note3Image,note4Image,note5Image; 
function preload(){
  note1Image  = loadImage("note1.png");
  note2Image  = loadImage("note2.png");
  note3Image  = loadImage("note3.png");
  note4Image  = loadImage("note4.png");
  note5Image  = loadImage("note5.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}