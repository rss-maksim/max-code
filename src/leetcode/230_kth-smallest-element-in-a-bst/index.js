/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
export const kthSmallest = (root, k) => {
    let current = null;

    const kthSmallestHelper = (node) => {
        if (node.left) {
            kthSmallestHelper(node.left);
        }
        k -= 1;
        if (k === 0) {
            current = node.val;
            return;
        }

        if (node.right) {
            kthSmallestHelper(node.right);
        }
    };

    kthSmallestHelper(root);

    return current;
};

export const kthSmallestInorder = (root, k) => {
    const inorder = [];

    const kthSmallestHelper = (node) => {
        if (node.left) {
            kthSmallestHelper(node.left);
        }
        inorder.push(node.val);
        if (node.right) {
            kthSmallestHelper(node.right);
        }
    };

    kthSmallestHelper(root);

    return inorder[k - 1];
};
