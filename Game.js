class Game{
    constructor(){}

    getState(){
        var gatStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState= data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: this.getState
        });
    }

    start(){
        if(gameState === 0){
            player= new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}