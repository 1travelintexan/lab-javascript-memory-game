class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }

  shuffleCards() {
    let copyCards = [...this.cards];
    let shuffled = [];
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * copyCards.length);
      shuffled.push(copyCards[randomIndex]);
      copyCards.splice(randomIndex, 1);
    }
    this.cards = shuffled;
  }

  checkIfPair(card1, card2) {
    //add one the the pairs clicked
    this.pairsClicked++;
    //check if they match and add to the guessed pairs
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
