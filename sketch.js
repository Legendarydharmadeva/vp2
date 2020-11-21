//Create variables here
var dog, happyDog;
var sittingDog;
var database;
var foodS, foodStock; 

function preload()
{
  //load images here
  sittingDog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");

}

function setup() {
 var canvas = createCanvas(500,500);
 database = firebase.database();
foodStock = database.ref('Food');
foodStock.on("value",readStock);
 
 dog = createSprite(250,250,20,20);
 dog.addImage("sitting",sittingDog);
 dog.addImage("happy",happyDog);
 dog.scale = 0.7;
 
  
}


function draw() {  
  background(46,139,87);

  drawSprites();
  //add styles here
  fill("white");
  text(foodS,150,50);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}


  database.ref('/').update({
    Food:x
  })
}

function keyPressed(){
  console.log("test1");
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeImage("happy",happyDog);
    console.log("test");
  }
}

