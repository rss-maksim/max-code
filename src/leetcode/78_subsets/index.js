/**
 * Complexity:
 * O(N * 2^N) time
 * O(N) space
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const subsets = (nums) => {
    const output = [];

    const backtrack = (k, first = 0, current = []) => {
        if (current.length === k) {
            output.push(current);
            return;
        }

        for (let i = first; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(k, i + 1, [...current]);
            current.pop();
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        backtrack(i, 0, []);
    }

    return output;
}
