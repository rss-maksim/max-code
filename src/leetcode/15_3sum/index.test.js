import { threeSum } from './';

test('15. 3Sum problem', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
        [-1, -1, 2],
        [-1, 0, 1],
    ]);

    expect(threeSum([0, 1, 1])).toStrictEqual([]);

    expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);

    expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);

    expect(threeSum([-2, 0, 1, 1, 2])).toStrictEqual([
        [-2, 0, 2],
        [-2, 1, 1],
    ]);
});
