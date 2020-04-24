/* https://leetcode.com/problems/wildcard-matching
   The following JavaScript solution causes time-exceeded error */

var table = {}

// trim leading * in p: p = *****abc => p = *abc
var trim_leading_wildcards = function(p) {
    if (p != "" && p[0] == "*") {
        var count = 0
        for (var i = 1; i < p.length; i++) {
            if (p[i] == "*") {
                count += 1
            } else {
                break
            }
        }
        p = p.slice(count)
    }
    return p
} 

var isMatch = function(s, p) {
    p = trim_leading_wildcards(p)
    if ([s, p] in table) {
        return table[[s, p]]
    }
    if (p == "*") {
        table[[s, p]] = true
    } else if (p == "" && s == "") {
        table[[s, p]] = true
    } else if (p != "" && s == "") {
        table[[s, p]] = false
    } else if (p[0] == s[0] || p[0] == "?") {
        table[[s, p]] = isMatch(s.slice(1), p.slice(1))
    } else if (p[0] == "*") {
        // s = XXXX, p = *XXX
        // s vs p[1:]; s[1:] vs p
        table[[s, p]] = isMatch(s, p.slice(1)) || isMatch(s.slice(1), p)
    } else {
        table[[s, p]] = false
    }
    return table[[s, p]]