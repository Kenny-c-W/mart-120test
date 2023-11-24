var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var x = 50;
var y = 50;
var dimaniter = 25;

var shapeX = 30;
var shapeY = 30;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(800, 800);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
background(120,45,78);
  fill(0);
  stroke(0);
  createBorders(10);
  drawCharacter();
  move();


  textSize(16);
  text("Exit", width-50,height-50);
  
  fill(13,145,14);
  circle(shapeX, shapeY, 10);
  
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
    if(shapeX < width)
    {
        shapeX = 0;
    }
    if(shapeX > 0)
    {
        shapeX = width;
    }
  if(shapeY > height)
    {
      shapeY = 0;
    }
  if(shapeY < 0)
    {
      shapeY = height;
    }
    
  if(characterX > width && characterY > width-50)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Win", width/2-50, height/2-50);
    }
    
    //if(key == 'mouse')
    //{
      //  rect(x, y, 40, 30)
        //x = square+=10;
        //x= square;
    //}
  
}
  function mouseClicked()
    {
        mouseShapeX=mouseX;
        mouseShapeY=mouseY;
    }
function move()
{
     if(keyIsDown(a))
    {
        characterX -= 15;
      console.log("movement" + characterX);
    }
    else if (keyIsDown(d))
    {
        characterX += 15;
      console.log("movement" + characterX);
    }
    if(keyIsDown(w))
    {
        characterY -= 15;
       console.log("movement" + characterY);
    }
    else if(keyIsDown(s))
    {
        characterY += 15;
       console.log("movement" + characterY);
    }
}
function createBorders(thickness)
{
  rect(0,0,width,thickness);
  
  rect(0,0,width,thickness);
  
  rect(0,height-thickness,width,thickness);
  
  rect(height-thickness,0,width,thickness);
}
function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
  console.log(characterX);
  
}

function drawCharacter()
{
  fill(23,40,123);
  circle(characterX,characterY,25);
}
