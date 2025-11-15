const icons = ['👽', '👾', '🚀', '🌑', '☀️', '🏹', '🐚', '🪼'];

let cardArray = icons.concat(icons);

cardArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');

cardArray.forEach(icon => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.icon = icon;
    gameBoard.appendChild(card);

});

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

gameBoard.addEventListener('click', event => {
    const clickedCard = event.target;

    if (lockBoard) return;
    if (clickedCard === firstCard) return;

    clickedCard.classList.add('flipped');
    clickedCard.textContent = clickedCard.dataset.icon;

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = clickedCard;

    } else {
        hasFlippedCard = false;
        secondCard = clickedCard;

        if (firstCard.dataset.icon === secondCard.dataset.icon) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            resetBoard();

        } else {

            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard.textContent = '';
                secondCard.textContent = '';
                resetBoard();
            }, 1000);
        }
    }
});

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}