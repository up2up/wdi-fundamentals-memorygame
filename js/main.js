console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamond",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamond",
    cardImage: "images/king-of-diamonds.png"
  },
];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay.length >= 2) {
    var comPareOne = cardsInPlay[cardsInPlay.length - 1];
    var comPareTwo = cardsInPlay[cardsInPlay.length - 2];
    if (comPareOne.rank === comPareTwo.rank) {
      if (comPareOne.suit !== comPareTwo.suit) {
        alert("Matching");
      }
    }
    else {
      alert("Not matching");
    }
  }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}

var createBoard = function () {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }


}
createBoard();