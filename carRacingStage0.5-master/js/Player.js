class Player{
    constructor(){
this.distance=0
this.name=null
this.index=null
    }
 getCount ()  {
     var playerCountRef=database.ref('playerCount');
     playerCountRef.on("value", (data)=>{
         playerCount=data.val();
     })
 }
 
 updateCount(count){
     database.ref('/').update({
         playerCount:count
     })
 }

 update(){
    
     var playerIndex="players/player"  +this.index;
     database.ref(playerIndex).set({
         name:this.name,
         distance:this.distance
         
     })
  
 }
}