import { maxDepth } from './';
import { constructBinaryTreeFromSerializedFormat } from './constructBinaryTreeFromSerializedFormat';

test('104. Maximum Depth of Binary Tree', () => {
    expect(
        maxDepth(
            constructBinaryTreeFromSerializedFormat([
                3,
                9,
                20,
                null,
                null,
                15,
                7,
            ])
        )
    ).toBe(3);

    expect(
        maxDepth(constructBinaryTreeFromSerializedFormat([1, null, 2]))
    ).toBe(2);
});
