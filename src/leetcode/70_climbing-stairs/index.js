/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = (n) => {
    if (n < 2) {
        return n;
    }

    let prevFirst = 1;
    let prevSecond = 1;
    for (let i = 2; i <= n; i++) {
        const next = prevFirst + prevSecond;
        prevSecond = prevFirst;
        prevFirst = next;
    }

    return prevFirst;
}
