import { cloneGraph } from './';

// @TODO: Transform tests
test.skip('133. Clone Graph problem', () => {
    expect(
        cloneGraph([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3],
        ])
    ).toEqual([
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
    ]);

    expect(cloneGraph([[]])).toEqual([[]]);

    expect(cloneGraph([])).toEqual([]);
});
