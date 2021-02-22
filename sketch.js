

var canvas;
var music;
var box,rect1,rect2,rect3,rect4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);
box=createSprite(random(20,750),random(20,550),20,20)
box.shapeColor="pink"
box.velocityY=random(2,8);
box.velocityX=random(-2,8);
//rect0.setAnimation("bounceOff");
rect1=createSprite(800,600,80,50)
rect1.shapeColor="orange"
rect2=createSprite(600,600,80,50)
rect2.shapeColor="green"
rect3=createSprite(400,600,80,50)
rect3.shapeColor="blue"
rect4=createSprite(200,600,80,50)
rect4.shapeColor="purple"

}

function draw() {
    background(rgb(169,169,169));
edges=createEdgeSprites();
box.bounceOff(edges[0])
box.bounceOff(edges[1])
box.bounceOff(edges[2])
box.bounceOff(edges[3])

box.bounceOff(rect1)
box.bounceOff(rect2)
box.bounceOff(rect3)
box.bounceOff(rect4)

if(rect1.isTouching(box)){
  box.shapeColor="orange"
  music.play();
}

if(rect2.isTouching(box)){
  box.shapeColor="green"
  box.velocityX=0
  music.stop();
}
if(rect3.isTouching(box)){
  box.shapeColor="blue"
}
if(rect4.isTouching(box)){
  box.shapeColor="purple"
}
   
    drawSprites();
}
function bounceOff(object1,object2) {
    if (object1.x - object2.x < object2.width / 2 + object1.width / 2
      && object2.x - object1.x < object2.width / 2 + object1.width / 2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height / 2 + object1.height / 2
      && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
  }
  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width / 2 + object1.width / 2
        && object2.x - object1.x < object2.width / 2 + object1.width / 2
        && object1.y - object2.y < object2.height / 2 + object1.height / 2
        && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
      return true;
        }
        else{
            return false;
        }

  }