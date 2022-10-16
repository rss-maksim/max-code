import {lowestCommonAncestor} from './';
import {constructBinaryTreeFromSerializedFormat} from './constructBinaryTreeFromSerializedFormat';


// @TODO: Check tests
test('236. Lowest Common Ancestor of a Binary Tree problem', () => {
    expect(lowestCommonAncestor(
        constructBinaryTreeFromSerializedFormat([3,5,1,6,2,0,8,null,null,7,4]), 5, 1)
    ).toBe(3);

    expect(
        lowestCommonAncestor(constructBinaryTreeFromSerializedFormat([3,5,1,6,2,0,8,null,null,7,4]), 5, 4)
    ).toBe(2);

    expect(
        lowestCommonAncestor(constructBinaryTreeFromSerializedFormat([1,2]), 1, 2)
    ).toBe(1);
});
