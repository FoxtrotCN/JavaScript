let deck = [];

const cardsTypes = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

let playerScore = 0,
    computerScore = 0;

//HTML References

const btnRequestCard = document.querySelector('#btnRequestCard');
const btnStop = document.querySelector('#btnStop');
const htmlPoints = document.querySelectorAll('small');
const playerDivCards = document.querySelector('#player-cards');
const computerDivCards = document.querySelector('#computer-cards');


const makeDeck = () => {
    for (let c = 2; c <= 10; c++) {
        for (let type of cardsTypes) {
            deck.push(c + type);
        }

    }
    for (let type of cardsTypes) {
        for (let spec of specialCards) {
            deck.push(spec + type);
        }
    }

    //Shuffle deck
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

makeDeck()

// function request a card

const requestCard = () => {
    if (deck.length === 0) {
        throw 'The deck is empty';
    }
    const card = deck.pop()
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

// Computer turn

const computerTurn = (minimumPoints) => {
    do {
        const card = requestCard();
        computerScore = computerScore + cardValue(card);
        htmlPoints[1].innerText = computerScore;
        const cardImg = document.createElement('img');
        cardImg.src = `assets/cards/${card}.png`;
        cardImg.classList.add('cards');
        computerDivCards.append(cardImg);

        if (minimumPoints > 21) {
            break;
        }

    } while ((computerScore < minimumPoints) && (minimumPoints <= 21));
}


//Events
btnRequestCard.addEventListener('click', () => {
    const card = requestCard();
    playerScore = playerScore + cardValue(card);
    htmlPoints[0].innerText = playerScore;
    const cardImg = document.createElement('img');
    cardImg.src = `assets/cards/${card}.png`;
    cardImg.classList.add('cards');
    playerDivCards.append(cardImg);

    if (playerScore > 21) {
        console.warn('You lose!')
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerScore);


    } else if (playerScore === 21) {
        console.warn('You Won!');
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
    }
})

btnStop.addEventListener('click', () => {
    btnRequestCard.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerScore);
})
