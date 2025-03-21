        /* Write a JavaScript function to convert an
        amount to coins.
        Example input: 46 and possible coins 25, 10,
        5, 2, 1
        Output: 25, 10, 10, 1 */




































        
const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
    const totalCoins = [];
    for (let i = 0; i < coins.length; i++) {
        const thisCoinNum = Math.floor(money / coins[i]);
        for (let y = 0; y < thisCoinNum; y++) {
            totalCoins.push(coins[i]);
        }
        money = money % coins[i];
    }
    return totalCoins
};

console.log(countCoins(67));
console.log(countCoins(46));