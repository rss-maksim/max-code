/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {TreeNode} root
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
export const isValidBST = (root, min = -Infinity, max = Infinity) => {
    if (!root) {
        return true;
    }
    if (root.val <= min || root.val >= max) {
        return false;
    }

    const isLeftValid = isValidBST(root.left, min, root.val);
    const isRightValid = isValidBST(root.right, root.val, max);

    return isLeftValid && isRightValid;
}



