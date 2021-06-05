class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.serve = createButton("Serve")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  showServe(){
    this.serve.show();
  }
  hideServe(){
    this.serve.hide();
  }
  display(){
    this.title.html("Pong Game");
    this.title.position(200, 10);

    this.input.position(150 , 150);
    this.button.position(150, 200);
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(200,300);
      this.reset.position(300,130);
    this.serve.position(300,90);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      this.hideServe()
    });

    this.serve.mousePressed(()=>{
      console.log("pong vel "+pong.velocityX)
      
      game.updatePongPosition()
      drawSprites()
    })

  }
}
