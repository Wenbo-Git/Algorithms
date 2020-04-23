/* https://leetcode.com/problems/regular-expression-matching
s: a a b c
p: a * . c

dp[i][j]: do s[:i] and p[:j] match? 

dp:      0 1 2 3 4
         ? a * . c p[j]
     0 ? T F T F F
     1 a F F F F F
     2 a F F F F F
     3 b F F F F F
     4 c F F F F F
   s[i]

dp[0][0] = True

case 1:
    if s == ""
    s:
    p: X *|X *
    
    s:
    p: X|X *
    
    if p[:j - 2] matches with s (empty), then p[:j] matches with s (empty)
    if p[:j - 2] does not match with s (empty), then p[:j] does not match with s (empty)
    dp[0][j] = dp[0][j - 2] (1)

case 2:
    if p[j] == s[i]
    s: X X X X|a
    p: X X X X|a
   
    if p[j] == "."
    s: X X X X|a
    p: X X X X|.
    
    dp[i][j] = dp[i - 1][j - 1] (2)

case 3:
    if p[j] == "*"
        case 3 a):
        if p[j - 1] == "."
        s: X X X X a
        p: X X X|. *
        
        s: X X X X|a
        p: X X X . *
        
        if p[j - 1] == s[i]
        s: X X X X a
        p: X X X|a *
        
        s: X X X X|a
        p: X X X a *
        
        dp[i][j] = dp[i][j - 2] or dp[i - 1][j] (3)
        
        case 3 b):
        if p[j - 1] != s[i]
        s: X X X X a
        p: X X X|b *
        
        dp[i][j] = dp[i][j - 2] (4) 
*/

var isMatch = function(s, p) {
    var s = "?" + s
    var p = "?" + p
    var m = s.length
    var n = p.length
    var dp = []
    for (var i = 0; i < m; i++) {
        var row = []
        for (var j = 0; j < n; j++) {
            row.push(false)
        }
        dp.push(row)
    }
    dp[0][0] = true
    
    for (var j = 0; j < n; j++) {
        if (p[j] == "*") { //case 1:
            dp[0][j] = dp[0][j - 2]
        }
    }
    
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (p[j] == s[i] || p[j] == ".") { // case 2
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j] == "*") { // case 3
                if (p[j - 1] == "." || p[j - 1] == s[i]) { // 3 a)
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
                } else if (p[j - 1] != s[i]) { // 3 b
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    
    return dp[m - 1][n - 1]
};