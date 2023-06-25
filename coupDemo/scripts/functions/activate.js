export function activate(numPlayers, totPlayers) {
    for (let index = 0; index < numPlayers; index++){
        const element = totPlayers[index];
        element.status = "active";
    };
    console.log(`${numPlayers} players have been activated`)
}