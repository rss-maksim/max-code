import { longestMountain } from './';

test('`longestMountain` problem', () => {
    expect(longestMountain([2,1,4,7,3,2,5])).toBe(5);

    expect(longestMountain([2,2,2])).toBe(0);

    expect(longestMountain([0, 2, 3, 3, 4, 0, 9, 6, 5, -1, -3, 2, 4])).toBe(6);
});
