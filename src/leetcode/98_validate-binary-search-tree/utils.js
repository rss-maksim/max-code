export function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

export const constructBinaryTreeFromSerializedFormat = (serializedTree) => {
    let root = null;
    let queue = [];

    function insertValue(value) {
        let node = new TreeNode(value);
        if (root == null) {
            root = node;
        } else if (queue[0].left == null) {
            queue[0].left = node;
        } else {
            queue[0].right = node;
            queue.shift();
        }
        queue.push(node);
    }

    for (let node of serializedTree) {
        insertValue(node);
    }

    return root;
}
