var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  if(score === 3){
    clear()
    background(bg2)
    fill("black")
    textSize(40)
    textSize("TREASURE UNLOCKED",250,200)
  }

  // Add code to display the end screen


  drawSprites()
}
this.button1.mousePressed(()=>{
if(system.authenticate(accessCode1,this.accessCode1.value())){
  this.button1.hide()
  this.accessCode1.hide()
  score++
}


})