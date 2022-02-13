function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var zigzagLevelOrder = function(root) {
    var ret = []
    if (root == null) {
        return ret
    }
    var queue = [root]
    while (queue.length) {
        var l = []
        n = queue.length
        for (var i = 0; i < n; i++) {
            var node = queue.shift()
            l.push(node.val)
            if (node.left != null) {
                queue.push(node.left)
            }
            if (node.right != null) {
                queue.push(node.right)
            }
        }
        if (ret.length % 2 == 0) {
            ret.push(l)
        } else {
            ret.push(l.reverse())
        }
    }
    return ret
};
var n1 = new TreeNode(3)
var n2 = new TreeNode(9)
var n3 = new TreeNode(20)
var n4 = new TreeNode(15)
var n5 = new TreeNode(7)

n1.left = n2
n1.right = n3
n3.left = n4
n3.right = n5
var arr = zigzagLevelOrder(n1)

console.log(arr[0][0], arr[1][0], arr[1][1], arr[2][0], arr[2][1])