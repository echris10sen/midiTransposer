import { gameInit } from "../../coupDemo/scripts/gameInit.js";
function addListenenrs() {
    console.log("Adding Listener to Begin Button");
    const game = new gameInit();
    document.querySelector(".startButton").addEventListener('click', () => {
        console.log("I am going to run the game");
        game.gameInit();
    });
};
addListenenrs();