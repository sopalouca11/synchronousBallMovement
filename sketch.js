
var canvas,backgroundImage;
var gameState=0;
var playerCount;
var form,player,game;
var database;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 game = new Game ();
 game.getState();
game.start()

}

function draw(){
  background("white");
  
  
}




