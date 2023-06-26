import { shuffle } from "../../coupDemo/scripts/functions/shuffle.js";
import { deal } from "../../coupDemo/scripts/functions/deal.js";
import { activate } from "../../coupDemo/scripts/functions/activate.js";

export class gameInit {
    // Variables
    data;
    initialBoard;
    deckOrder;
    deckSize;
    cardList = [];
    activePlayers = 4;

    gameInit(){
        console.log("Initializing");
        Promise.all([
            this.getBoardData()
        ])
        .then(values => {
            console.log("Game Data Set");
            console.log("Setting Active Players");
            activate(this.activePlayers,this.initialBoard);
            this.deckOrder = shuffle(this.deckOrder, this.deckSize);
            console.log(this.deckOrder);
            console.log("Dealing");
            deal(this.initialBoard, this.deckOrder, this.cardList, this.activePlayers);
            console.log("Cards have been Dealt");   
            console.log(this.initialBoard);    
        });
    };

    async getBoardData() {
        const response = await fetch("http://192.168.1.103:3001");
        const jsonData = await response.json();
        this.data = jsonData;
        console.log("Game Data Recieved, setting game data");
        this.initialBoard = this.data.players
        this.deckOrder = this.data.deck.deckOrder;
        this.deckSize = this.data.deck.deckSize;

        console.log("Getting this games cards");
        this.cardList = this.data.deck.cardlist.slice(0);
    }
}