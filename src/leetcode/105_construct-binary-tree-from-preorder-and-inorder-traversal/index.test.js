import { buildTree } from './';
import { serializeTree } from './serializeTree';

test('105. Construct Binary Tree from Preorder and Inorder Traversal', () => {
    const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

    expect(serializeTree(tree)).toEqual([3, 9, 20, null, null, 15, 7]);

    expect(serializeTree(buildTree([-1], [-1]))).toEqual([-1]);
});
