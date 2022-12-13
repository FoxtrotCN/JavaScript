
let deck = [];

const cardsTypes = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

const makeDeck = () => {
    for (let c = 2; c <=10; c++) {
        for (let type of cardsTypes) {
            deck.push(c + type);
        }

    }
    for (let type of cardsTypes) {
        for (let spec of specialCards) {
            deck.push(spec + type);
        }
    }
    console.log(deck);
    //Shuffle deck
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

makeDeck()