import { uniquePaths } from './';

test('62. Unique Paths problem', () => {
    expect(uniquePaths(3, 7)).toBe(28);

    expect(uniquePaths(3, 2)).toBe(3);

    expect(uniquePaths(1, 1)).toBe(1);

    expect(uniquePaths(0, 0)).toBe(0);
});
