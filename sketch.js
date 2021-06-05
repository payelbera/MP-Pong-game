var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var player1, player2, pong;
var ballPosition;
var position;
var players 
var edges;

function preload(){
  
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    //clear();
    //game.updatePongPosition();
    game.play();
    //console.log("pong vel sketch "+pong.velocityX)
          
  }
  if(keyDown("space")){
    //console.log("space is pressed")
    pong.velocityX=3;
    pong.velocityY=3
    game.updatePongPosition()
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites()
}
