/**
 * Complexity:
 * O(m*n) time
 * O(m*n) space
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export const uniquePaths = (m, n) => {
    if (m === 0 || n === 0) {
        return 0;
    }
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 1));

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
