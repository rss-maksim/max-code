/**
 * Complexity:
 * O(N^3) time
 * O(N) space
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
export const wordBreak = (s, wordDict) => {
  const set = new Set([...wordDict]);

  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[dp.length - 1];
};
