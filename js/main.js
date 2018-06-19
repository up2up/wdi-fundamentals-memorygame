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

var checkForMatch = function (elem) {
  elem.setAttribute('src', cardsInPlay[cardsInPlay.length - 1].cardImage);
  if (cardsInPlay.length >= 2) {
    var comPareOne = cardsInPlay[cardsInPlay.length - 1];
    var comPareTwo = cardsInPlay[cardsInPlay.length - 2];
    if (comPareOne.rank === comPareTwo.rank) {
      if (comPareOne.suit !== comPareTwo.suit) {
        alert("You found a match!");
      }
    }
    else {
      alert("Sorry, try again.");
    }
  }
}

var flipCard = function (elem) {
  var cardId = elem.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId]);
  checkForMatch(elem);
}

var createBoard = function () {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', function () { flipCard(this);});
    document.getElementById("game-board").appendChild(cardElement);
  }


}
createBoard();