/**
 * Complexity:
 * O(N^2) time
 * O(N) space
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = (nums) => {
    nums.sort((a, b) => a -b);

    const output = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                output.push([nums[i], nums[left], nums[right]]);
                left += 1;

                while (nums[left] === nums[left - 1] && left < right) {
                    left += 1;
                }
            } else if (sum > 0) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }

    return output;
}
