class MemoryGame {
  constructor(card){
    this.cards = card
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }
  shuffleCards() {
    
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }
  

  

  
  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }

  }
  isFinished() {
    
    if (this.pairsGuessed != (this.cards.length/2)) {
      return false
    } else {
      return true
    }

  }
}