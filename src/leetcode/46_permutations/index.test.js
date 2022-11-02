import { permute } from './';

test('46. Permutations problem', () => {
    console.log(permute([1, 2, 3]));
    expect(permute([1, 2, 3])).toEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 2, 1],
        [3, 1, 2],
    ]);

    expect(permute([0, 1])).toEqual([
        [0, 1],
        [1, 0],
    ]);

    expect(permute([1])).toEqual([[1]]);
});
