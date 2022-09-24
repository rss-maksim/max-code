/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// Boyer-Moore Voting Algorithm
export const majorityElement = (nums) => {
    let count = 0;
    let candidate;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += candidate === num ? 1 : -1;
    }

    return candidate;
}
