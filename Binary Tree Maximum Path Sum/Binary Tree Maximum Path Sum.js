var max_sum

var helper = function(root) {
    if (root == null) {
        return -Infinity
    }
    var max_left = helper(root.left)
    var max_right = helper(root.right)
    max_sum = Math.max(max_sum, root.val, Math.max(max_left, max_right), Math.max(max_left, max_right) + root.val, max_left + max_right + root.val)
    return Math.max(root.val, Math.max(max_left, max_right) + root.val)
}

var maxPathSum = function(root) {
    max_sum = root.val
    helper(root)
    return max_sum
};