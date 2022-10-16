/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = (root, p, q) => {
    let ans = null;

    const lowestCommonAncestorHelper = (node) => {
        if (!node) {
            return false;
        }

        const mid = node === p || node === q;
        const left = lowestCommonAncestorHelper(node.left);
        const right = lowestCommonAncestorHelper(node.right);

        if (left + right + mid >= 2) {
            ans = node;
        }

        return left || right || mid;
    }

    lowestCommonAncestorHelper(root);

    return ans;
}



