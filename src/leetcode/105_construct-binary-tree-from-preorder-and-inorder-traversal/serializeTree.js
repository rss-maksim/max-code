import { TreeNode } from './TreeNode';

/**
 * @param {array} serializedTree
 * @return {TreeNode}
 */
export const serializeTree = (root) => {
    const levels = [];

    if (!root) return levels;

    const q = [root];
    let level = 0;

    while (q.length) {
        levels.push([]);

        const len = q.length;

        for (let i = 0; i < len; i++) {
            const node = q.shift();
            if (node) {
                levels[level].push(node.val);
            } else {
                levels[level].push(null);
                continue;
            }

            if (node.left) {
                q.push(node.left);
            } else {
                q.push(null);
            }
            if (node.right) {
                q.push(node.right);
            } else {
                q.push(null);
            }
        }

        level += 1;
    }
    return levels.filter((level) => level.some(Boolean)).flat();
};
