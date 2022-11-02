import { maxArea } from './';

test('11. Container With Most Water problem', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);

    expect(maxArea([1, 1])).toBe(1);

    expect(maxArea([1, 9, 8, 7])).toBe(14);
});
