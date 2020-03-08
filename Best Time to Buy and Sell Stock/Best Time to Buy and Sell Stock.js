//https://leetcode.com/problems/best-time-to-buy-and-sell-stock
var maxProfit = function(prices) {
    var min_price = Infinity
    var max_profit = 0
    for (var i = 0; i < prices.length; i++) {
        min_price = Math.min(min_price, prices[i])
        max_profit = Math.max(max_profit, prices[i] - min_price)
    }
    return max_profit
};
console.log(maxProfit([7,1,5,3,6,4]))