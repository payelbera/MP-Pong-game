class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   writePosition(x,y){
    database.ref('ball/position').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
  
 
  
   showError(){
    //console.log("Error in writing to the database");
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    edges = createEdgeSprites();
    player1 = createSprite(10,200, 10,70);
    player1.shapeColor = "red";
    player2 = createSprite(380,200, 10, 70);
    player2.shapeColor ="blue";
    players = [player1,player2];
    pong = createSprite(200,200, 10,10);
    
  }
  updatePongPosition(){
    database.ref('ball/position').update({
      x:pong.x,
      y:pong.y
    })

  }
  play(){
    form.hide();
    form.showServe();
    Player.getPlayerInfo();
    this.updatePongPosition()
    ballPosition = database.ref('ball/position');
    ballPosition.on("value", function(data){
      position = data.val();
    //console.log(position.x);
    pong.x = position.x;
    pong.y = position.y;
    
  });
  
  if(allPlayers!= undefined){
    background("white")
    var index = 0;
    for(var plr in allPlayers){
      index = index+1
      //console.log("index is "+index)
      players[index-1].y = allPlayers[plr].distance
      
  
  }
  if(pong.isTouching(player2)){
    console.log("is T P2")
    pong.velocityX = (-1)*(random(2,3))
    pong.velocityY = (-1)*(random(2,3))
    console.log(pong.velocityX)
    console.log(pong.velocityY)
  }

  
  if(pong.isTouching(player1)){
    console.log("is T P1")
    pong.velocityX = (-1)*pong.velocityX
    pong.velocityY = (-1)*pong.velocityY
    console.log(pong.velocityX)
    console.log(pong.velocityY)
  }
        
    if (pong.isTouching(edges[2]) || pong.isTouching(edges[3])) {
      pong.bounceOff(edges[2]);
      pong.bounceOff(edges[3]);
      
    }
  }
    
    ////console.log(player.index)
    if(keyIsDown(DOWN_ARROW) ){
      player.distance +=5
      player.update();
    }

    if(keyWentUp(UP_ARROW) ){
      player.distance -=5
      player.update();
    } 
       
    drawSprites();
  }

   end(){

  }
}
