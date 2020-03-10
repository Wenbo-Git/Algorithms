// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
var maxProfit = function(prices) {
    var max_profit = 0
    for (var i = 1; i < prices.length; i++) {
        max_profit += Math.max(0, prices[i] - prices[i - 1])
    }
    return max_profit
};