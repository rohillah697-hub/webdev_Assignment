// Random Dice Generator using crypto module

const crypto = require("crypto");

console.log("🎲 Random Dice Generator");
console.log("------------------------");

function rollDice() {
    return crypto.randomInt(1, 7);
}

// Roll dice 5 times

for (let i = 1; i <= 5; i++) {
    const diceValue = rollDice();

    console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}