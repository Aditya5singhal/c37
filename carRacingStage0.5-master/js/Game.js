class Game{
    constructor(){

    }

    getState ()  {
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value", (data)=>{
            gameState=data.val();
        })
    }
    
    update(State){
        database.ref('/').update({
            gameState:state
        })
    } 

    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}