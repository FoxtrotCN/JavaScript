
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
    return deck;
}

makeDeck()

// function request a card

const requestCard = () => {
    if (deck.length === 0) {
        throw 'The deck is empty';
    }
    const card = deck.pop()
    console.log(deck);
    console.log(card)
    return card;
}

// for (let i = 0; i<=100; i++) {
//     requestCard();
// }

// requestCard()

const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : value * 1;
    /*let score = 0;
    if (isNaN(value)) {
        score = (value === 'A') ? 11 : 10;
        // console.log(`It's not a number`);
    } else {
        // console.log(`It's a number`);
        score = value * 1;
    }
    console.log(score);*/
}

const value = cardValue(requestCard());
console.log({value});