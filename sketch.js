var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogIMG;
var happyDogIMG;
function preload()
{
  dogIMG=loadImage("dogImg1.png");
	happyDogIMG=loadImage("dogImg.png");
}


function setup() {
  createCanvas(500, 500);
  dog.addImage(dogIMG);
  happyDog.addImage(happyDogIMG);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogIMG);
}
  drawSprites();
  textSize(30);
  fill(red);
  stroke(black);
  text("Food remaining : "+Food);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
  Food:x
  })
}


