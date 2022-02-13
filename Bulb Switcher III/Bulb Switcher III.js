// https://leetcode.com/problems/bulb-switcher-iii
var numTimesAllBlue = function(light) {
    count = 0
    right_most = 0
    bulbs_on = []
    for (var i = 0; i < light.length; i++) {
        bulbs_on.push(light[i])
        right_most = Math.max(right_most, light[i])
        if (right_most == bulbs_on.length) {
            count += 1
        }
    }
    return count
};