import { rightSideView } from './';
import { constructBinaryTreeFromSerializedFormat } from './util';

test('543. Diameter of Binary Tree', () => {
    expect(
        rightSideView(
            constructBinaryTreeFromSerializedFormat([1, 2, 3, null, 5, null, 4])
        )
    ).toEqual([1, 3, 4]);

    expect(
        rightSideView(constructBinaryTreeFromSerializedFormat([1, null, 3]))
    ).toEqual([1, 3]);

    expect(rightSideView(constructBinaryTreeFromSerializedFormat([]))).toEqual(
        []
    );
});
