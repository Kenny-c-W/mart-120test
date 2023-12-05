var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//var x = 50;
//var y = 50;
//var dimaniter = 25;
var myXs = [];
var myYs = [];
var myDiameters = [];
var myXSpeed = [];
var myYSpeed = [];

//shape1
var shapeX = 30;
var shapeY = 30;
var shapeXSpeed;
var shapeYSpeed;
//shape2
var shape2X = 30;
var shape2Y = 30;
var shape2XSpeed;
var shape2YSpeed;
//mouseShape
var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(500, 400);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
 var x =50;
  var y=50;
  var diameter=25;
  for(var i = 0; i < 5; i++)
      {
        myXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myYSpeed [i]= Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = getRandomNumber(500);
        myYs[i] = getRandomNumber(400);
        myDiameters[i] = getRandomNumber(25);
      }
  
}

function draw()
{
background(120,45,78);
  fill(0);
  stroke(0);
  createBorders(10);
  drawCharacter();
  move();
  moveShape();
  Text();
  getRandomNumber();
  
  fill(120,130,140);
  circle(mouseShapeX, mouseShapeY, 25);
  
    //if(key == 'mouse')
    //{
      //  rect(x, y, 40, 30)
        //x = square+=10;
        //x= square;
    //}
  
}
function Text()
{
    textSize(16);
  text("Exit", width-50,height-50);
  
  if(characterX > width && characterY > width-50)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Win", width/2-50, height/2-50);
    }
}

function moveShape()
{
   fill(13,13,13);
  circle(shape2X, shape2Y, 20);
  shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2X += shapeXSpeed;
  shape2Y += shapeYSpeed;
     if(shape2X < width)
    {
        shape2X = 300;
    }
    if(shape2X > 300)
    {
        shape2X = width;
    }
  if(shape2Y > height)
    {
      shape2Y = 10;
    }
  if(shape2Y < 10)
    {
      shape2Y = height;
    }
  // small shape
  fill(13,145,14);
  circle(shapeX, shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
    if(shapeX < width)
    {
        shapeX = 30;
    }
    if(shapeX > 30)
    {
        shapeX += width;
    }
  if(shapeY > height)
    {
      shapeY = 0;
    }
  if(shapeY < 0)
    {
      shapeY = height;
    }
  //arry shapes
  fill(13,133,331);
  for(var i = 0; i < myXs.length; i++)
    {
      circle(myXs[i],myYs[i],myDiameters[i]);
      myXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myYSpeed [i]= Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      myXs[i] += myXSpeed[i];
  myYs[i] += myYSpeed[i];
    if(myXs[i] < width)
    {
        myXs[i] = 200;
    }
    if(myXs[i] > 200)
    {
        myXs[i] += width;
    }
  if(myYs[i] > height)
    {
      myYs[i] = 0;
    }
  if( myYs[i] < 0)
    {
      myYs[i] = height;
    }
  }
    
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
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
