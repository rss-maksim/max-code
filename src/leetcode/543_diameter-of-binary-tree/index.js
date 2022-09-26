/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const diameterOfBinaryTree = (root) => {
    let diameter = 0;

    const diameterOfBinaryTreeHelper = (node) => {
        if (!node) {
            return 0;
        }

        const left = diameterOfBinaryTreeHelper(node.left);
        const right = diameterOfBinaryTreeHelper(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    }

    diameterOfBinaryTreeHelper(root);

    return diameter;
}

function TreeNode(val, left, right) {
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



