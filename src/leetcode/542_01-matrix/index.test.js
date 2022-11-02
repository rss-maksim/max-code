import { updateMatrix } from './';

test('542. 01 Matrix problem', () => {
    expect(
        updateMatrix([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ])
    ).toEqual([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]);

    expect(
        updateMatrix([
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ])
    ).toEqual([
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1],
    ]);
});
