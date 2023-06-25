export function shuffle(deckOrder, deckSize) {
    deckOrder = Array.from({length: deckSize}, (e,i)=> i+1).sort((a,b) => 0.5 - Math.random());
    console.log("Shuffling");
    return deckOrder;
};
