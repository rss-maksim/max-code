/**
 * Complexity:
 * O(N * amount) time
 * O(amount) space
 */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
export const change = (amount, coins) => {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let i = 0; i < amount + 1; i++) {
            if (coin <= i) {
                dp[i] += dp[i - coin];
            }
        }
    }
    return dp[amount];
}
