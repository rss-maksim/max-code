/**
 * Complexity:
 * O(coins * amount) time
 * O(amount) space
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coinChange = (coins, amount) => {
    const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;

    for (const coin of coins) {
        for (let i = 0; i < dp.length; i++) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    return dp[amount] !== Number.MAX_VALUE ? dp[amount] : -1;
};
