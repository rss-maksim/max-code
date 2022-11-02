import { kClosest } from './';

test('973. K Closest Points to Origin problem', () => {
    expect(
        kClosest(
            [
                [1, 3],
                [-2, 2],
            ],
            1
        )
    ).toStrictEqual([[-2, 2]]);

    expect(
        kClosest(
            [
                [3, 3],
                [5, -1],
                [-2, 4],
            ],
            2
        )
    ).toStrictEqual([
        [3, 3],
        [-2, 4],
    ]);

    expect(kClosest([], 0)).toStrictEqual([]);
});
