export function deal(players, deckOrder, cardList, activePlayers) {
    console.log(deckOrder);
    players.forEach(player => {
        if (player.status === "active") {
            player.card1.name = getCard(deckOrder[player.playerNumber - 1], cardList);
            player.card2.name = getCard(deckOrder[player.playerNumber - 1 + activePlayers], cardList);
        }
    });
}

function getCard(number, cardList) {
    switch (number) {
        case 1:
        case 2:
        case 3:
           return cardList[0];
        case 4:
        case 5:
        case 6:
           return cardList[1];
        case 7:
        case 8:
        case 9:
           return cardList[2];
        case 10:
        case 11:
        case 12:
           return cardList[3];
        case 13:
        case 14:
        case 15:
           return cardList[4];
        default:
    }
}