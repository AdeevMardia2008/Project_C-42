var hr = hour;
var mn = minutes;
var sc = seconds;

angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  scAngle(sc,0,60,0,360);
  mnAngle(mn,0,60,0,360);
  hrAngle(hr,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}