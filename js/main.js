console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];
// var cardThree = cards[2];
// var cardFour = cards[3];

cardsInPlay.push(cards[0]);
console.log("User flipped " + cards[0]);
cardsInPlay.push(cards[2]);
console.log("User flipped " + cards[2]);

if (cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } 
  else{
    alert("Sorry, try again");
  }
}