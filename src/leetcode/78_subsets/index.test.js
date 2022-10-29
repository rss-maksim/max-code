import { subsets } from './';

test('78. Subsets problem', () => {
    expect(subsets([1,2,3])).toEqual([[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]);

    expect(subsets([0])).toEqual([[],[0]]);

    expect(subsets([0, 1])).toEqual([[], [0], [1], [0, 1]]);
});
