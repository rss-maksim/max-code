import { TreeNode } from './TreeNode';

/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export const buildTree = (preorder, inorder) => {
    let preorderIndex = 0;
    const inorderMap = inorder.reduce((acc, value, index) => ({ ...acc, [value]: index }), {});

    const buildTreeHelper = (left, right) => {
        if (left > right) {
            return null;
        }

        const rootValue = preorder[preorderIndex];
        const root = new TreeNode(rootValue);

        preorderIndex += 1;

        root.left = buildTreeHelper(left, inorderMap[rootValue] - 1);
        root.right = buildTreeHelper(inorderMap[rootValue] + 1, right);

        return root;
    }

    return buildTreeHelper(0, preorder.length - 1);
}



