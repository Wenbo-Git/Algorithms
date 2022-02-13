/**
https://leetcode.com/problems/design-tic-tac-toe
 */
var TicTacToe = function(n) {
    this.grid = []
    for (var i = 0; i < n; i++) {
        this.grid.push(new Array(n).fill("z"));
    }
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    mark = 0
    if (player == 1){
        mark = 1;
        this.grid[row][col] = 1;
    } else {
        mark = 2;
        this.grid[row][col] = 2;
    }
    row_vals = []; 
    col_vals = [];
    diag1 = [];
    diag2 = [];
    n = this.grid.length;
    for (var i = 0; i < n; i++) {
        row_vals.push(this.grid[row][i])
        col_vals.push(this.grid[i][col])
        diag1.push(this.grid[i][i]) 
        diag2.push(this.grid[i][n - 1 - i])
    }
    
    if ((row_vals.every((element, i, arr) => {return arr[i] == mark})) || 
         (col_vals.every((element, i, arr) => {return arr[i] == mark})) ||
          (diag1.every((element, i, arr) => {return arr[i] == mark})) ||
           (diag2.every((element, i, arr) => {return arr[i] == mark}))) {
                return player;
           } else {
        return 0
    };     
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

var toe = new TicTacToe(3)
var res = toe.move(0, 0, 1)
console.log(res)
res = toe.move(0, 2, 2)
console.log(res)
res = toe.move(2, 2, 1)
console.log(res)
res = toe.move(1, 1, 2)
console.log(res)
res = toe.move(2, 0, 1)
console.log(res)
res = toe.move(1, 0, 2)
console.log(res)
res = toe.move(2, 1, 1)
console.log(res)