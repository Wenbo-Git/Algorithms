/**
https://leetcode.com/problems/longest-valid-parentheses

    s: (
       0
    s: )
       0
    s: ( )
       0 1
    s: ) ( ) ) ( ( ) )
       0 1 2 3 4 5 6 7
st:[-1]
*/

var longestValidParentheses = function(s) {
    var stack = [-1]
    ret = 0
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length > 0) {
                ret = Math.max(ret, i - stack[stack.length - 1])
            } else {
                stack.push(i)
            }
        }
    }
    return ret
};