/**
 * Complexity:
 * O(N) time
 * O(H) space, where H is N in the worst case
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const rightSideView = (root) => {
    if (!root) {
        return [];
    }
    const rightSide = [];

    const rightSideViewHelper = (node, level) => {
        if (level === rightSide.length) {
            rightSide.push(node.val);
        }

        if (node.right) {
            rightSideViewHelper(node.right, level + 1);
        }

        if (node.left) {
            rightSideViewHelper(node.left, level + 1);
        }
    }

    rightSideViewHelper(root, 0);

    return rightSide;
}



