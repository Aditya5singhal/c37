class Form {
    constructor(){
        this.input=createInput("write your name")
        this.button=createButton("click to start")
        this.greet=createElement("h1")

    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(450,100)
        
        
       this. input.position(450,150)

        
      this.  button.position(450,170)

       
      this.  button.mousePressed(()=>{
          this.  input.hide();
           this. button.hide();
            var name=this.input.value();
            playerCount+=1
          
            
            player.update(name)
            player.updateCount(playerCount)


          this.  greet.html(" welcome! "  +this.name)
          this.  greet.position(500,400)


        })
    }
}