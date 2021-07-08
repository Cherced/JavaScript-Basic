const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`monet box $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);
console.log();

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`monet box $${saveCoins}`);
    }
    return countCoins;
} 


let myMoneyBox = moneyBox();
myMoneyBox(1);
myMoneyBox(2);
myMoneyBox(3);
