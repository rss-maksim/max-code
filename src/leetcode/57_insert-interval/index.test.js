import { insert } from './';

test('57. Insert Interval problem', () => {
    expect(insert([[1,3],[6,9]], [2,5])).toStrictEqual([[1,5],[6,9]]);

    expect(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toStrictEqual([[1,2],[3,10],[12,16]]);

    expect(insert([], [5,7])).toStrictEqual([[5,7]]);
});
