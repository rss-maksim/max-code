import { flat } from './';

test('3. implement Array.prototype.flat()', () => {
    const list = [1, [2], [3, [4]]];

    expect(flat(list)).toEqual([1, 2, 3, [4]]);

    expect(flat(list, 1)).toEqual([1, 2, 3, [4]]);

    expect(flat(list, 2)).toEqual([1, 2, 3, 4]);
});
