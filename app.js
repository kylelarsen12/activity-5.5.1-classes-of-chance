class Casino {
  // Write code here
  constructor(name, isFakeCoin) {
    this.name = name;
    this.timesPlayed = 0;
    this.isFakeCoin = isFakeCoin;
  }

  playGame(betAmount) {
    this.timesPlayed++;
    if (Math.random() <= 0.5 || this.isFakeCoin) {
      console.log(`${this.name} wins, try again!`);
    } else {
      betAmount = betAmount * this.timesPlayed;
      console.log(`Congratulations! You win ${betAmount}`);
    }
  }

  rollDice(sides) {
    console.log("You rolled a " + (1 + Math.floor(Math.random() * sides)));
  }
}

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDice(6);
myExtraBonusCasino.rollDice(20);
myExtraBonusCasino.rollDice(100);
