import { climbStairs } from './';

test('70. Climbing Stairs problem', () => {
    expect(climbStairs(0)).toBe(0);

    expect(climbStairs(1)).toBe(1);

    expect(climbStairs(2)).toBe(2);

    expect(climbStairs(3)).toBe(3);

    expect(climbStairs(4)).toBe(5);
});
