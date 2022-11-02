/**
 * Complexity:
 * O(logN) time
 * O(1) space
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const pivot = Math.floor(left + (right - left) / 2);
        const num = nums[pivot];

        if (num === target) {
            return pivot;
        } else if (num >= nums[left]) {
            if (target >= nums[left] && target < num) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        } else {
            if (target > num && target <= num[right]) {
                left = pivot + 1;
            } else {
                right = pivot - 1;
            }
        }
    }

    return -1;
};
