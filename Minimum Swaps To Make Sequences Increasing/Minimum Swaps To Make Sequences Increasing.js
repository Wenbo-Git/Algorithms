/* https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing

   A[i] A[i + 1]
   B[i] B[i + 1]

   dp:  0    1   
      0 0    1
      1
      2
      .
      .
      .
     N - 1
   
   dp[i][0]: min # of total swaps at index i if no swap at index i
   dp[i][1]: min # of total swaps at index i if we swap ay index i
    
   Case 1: A[i] < A[i + 1] and B[i] < B[i + 1]
        dp[i + 1][0] = min(dp[i + 1][0], dp[i][0])
        dp[i + 1][1] = min(dp[i + 1][1], dp[i][1] + 1)
   Case 2: A[i] < B[i + 1] and B[i] < A[i + 1]
        dp[i + 1][0] = min(dp[i + 1][0], dp[i][1])
        dp[i + 1][1] = min(dp[i + 1][1], dp[i][0] + 1)
        
   return min(dp[N - 1][0], dp[N - 1][1]) */
   
var minSwap = function(A, B) {
    var N = A.length
    var dp = new Array(N)
    for (var i = 0; i < N; i++) {
        dp[i] = [Infinity, Infinity]
    }
    dp[0][0] = 0
    dp[0][1] = 1
    
    for (var i = 0; i < N; i++) {
        if (A[i] < A[i + 1] && B[i] < B[i + 1]) {
            dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][0])
            dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][1] + 1)
        }
        if (B[i] < A[i + 1] && A[i] < B[i + 1]) {
            dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][1])
            dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][0] + 1)
        }
    }
    
    return Math.min(dp[N - 1][0], dp[N - 1][1])
};