const myModule = (() => {
    "use strict";
    let deck = [];

    const cardsTypes = ['C', 'D', 'H', 'S'],
        specialCards = ['A', 'J', 'Q', 'K'];

    // let playerScore = 0,
    //     computerScore = 0;

    let playerPoints = [];


//HTML References

    const btnRequestCard = document.querySelector('#btnRequestCard'),
        btnStop = document.querySelector('#btnStop'),
        btnNewGame = document.querySelector('#btnNew'),
        htmlPoints = document.querySelectorAll('span'),
        divPlayerCards = document.querySelectorAll('.divCards');

    const startGame = (numPlayers = 2) => {
        deck = makeDeck();
        playerPoints = [];
        for (let p = 0; p < numPlayers; p++) {
            playerPoints.push(0);
        }
        htmlPoints.forEach(elem => elem.innerHTML = 0);
        divPlayerCards.forEach(elem => elem.innerHTML = '');

        btnRequestCard.disabled = false;
        btnStop.disabled = false;


    }

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
        return _.shuffle(deck);
    }


// function request a card

    const requestCard = () => {
        if (deck.length === 0) {
            throw 'The deck is empty';
        }
        return deck.pop();
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
    // Turn: 0 = first player and last will be the computer

    const pointsAccumulator = (card, turn) => {
        playerPoints[turn] += cardValue(card);
        htmlPoints[turn].innerText = playerPoints[turn];
        return playerPoints[turn];
    }

    const makeCard = (card, turn) => {
        const cardImg = document.createElement('img');
        cardImg.src = `assets/cards/${card}.png`;
        cardImg.classList.add('cards');
        divPlayerCards[turn].append(cardImg);
    }

    const setWinner = () => {
        const [minimumPoints, computerScore] = playerPoints;

        if (computerScore === minimumPoints) {
            alert('Nobody wins! :(');
        } else if (minimumPoints > 21) {
            alert('Computer Wins!');
        } else if (computerScore > 21) {
            alert('Player Wins!');
        } else {
            alert('Computer Won!');
        }

    }
// Computer turn

    let computerScore = 0;
    const computerTurn = (minimumPoints) => {
        do {
            const card = requestCard();
            computerScore = pointsAccumulator(card, playerPoints.length - 1);
            makeCard(card, playerPoints.length - 1);

        } while ((computerScore < minimumPoints) && (minimumPoints <= 21));
        setWinner();
    }


//Events
    btnRequestCard.addEventListener('click', () => {
        const card = requestCard();
        const playerPoints = pointsAccumulator(card, 0);
        makeCard(card, 0);

        // const cardImg = document.createElement('img');
        // cardImg.src = `assets/cards/${card}.png`;
        // cardImg.classList.add('cards');
        // playerDivCards.append(cardImg);

        if (playerPoints > 21) {
            console.warn('You lose!')
            btnRequestCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);


        } else if (playerPoints === 21) {
            console.warn('You Won!');
            btnRequestCard.disabled = true;
            btnStop.disabled = true;
        }
    })

    btnStop.addEventListener('click', () => {
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints);
    })


    btnNewGame.addEventListener('click', () => {
        startGame();

    })
    return {
        newGame: startGame

    };
})();