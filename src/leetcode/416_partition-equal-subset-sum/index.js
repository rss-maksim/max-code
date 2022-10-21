/**
 * Complexity:
 * O(m * n) time
 * O(m) space
 * m is the subSetSum = sum / 2, n is the number of array elements
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canPartition = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num);

  if (sum % 2 !== 0) return false;

  const subSetSum = sum / 2;

  const dp = new Array(subSetSum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = subSetSum; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[subSetSum];
};
