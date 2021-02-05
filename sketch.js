//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  happy_dog = loadImage("dogImg1.png");
  dog_img = loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite (250, 250);
  dog.addImage("dog", dog_img);

  happyDog = createSprite();
  happy_dog.addImage("happydog", happy_dog);


  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if (keyWentDwn(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
  text("Note: Press UP arrow key to feed the dog Milk!", 250, 100);
  textSize(20);
  fill("black");
  stroke("red");
}

function readStock(data){
  foodS=data.val();
}

//function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}
