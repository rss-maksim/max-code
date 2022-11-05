import { kthSmallest } from './';
import { constructBinaryTreeFromSerializedFormat } from './util';

test('230. Kth Smallest Element in a BST', () => {
    // expect(
    //   kthSmallest(
    //         constructBinaryTreeFromSerializedFormat([3,1,4,null,2]),
    //         1
    //     )
    // ).toBe(1);

    expect(
        kthSmallest(
            constructBinaryTreeFromSerializedFormat([
                5,
                3,
                6,
                2,
                4,
                null,
                null,
                1,
            ]),
            3
        )
    ).toBe(3);
});
