import {constructBinaryTreeFromSerializedFormat, diameterOfBinaryTree} from './';

test('543. Diameter of Binary Tree', () => {
    expect(diameterOfBinaryTree(
        constructBinaryTreeFromSerializedFormat([1,2,3,4,5]))
    ).toBe(3);

    expect(
        diameterOfBinaryTree(constructBinaryTreeFromSerializedFormat([1,2]))
    ).toBe(1);
});
