import { isValidBST } from './';
import { constructBinaryTreeFromSerializedFormat } from './utils';

test('98. Validate Binary Search Tree', () => {
    expect(isValidBST(constructBinaryTreeFromSerializedFormat([2, 1, 3]))).toBe(
        true
    );

    expect(
        isValidBST(
            constructBinaryTreeFromSerializedFormat([5, 1, 4, null, null, 3, 6])
        )
    ).toBe(false);

    expect(isValidBST(constructBinaryTreeFromSerializedFormat([2, 2, 2]))).toBe(
        false
    );
});
