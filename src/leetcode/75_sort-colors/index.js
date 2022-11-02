/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortColors = (nums) => {
    let cur = 0;
    let p0 = 0;
    let p2 = nums.length - 1;

    while (cur <= p2) {
        if (nums[cur] === 0) {
            swap(nums, p0, cur);
            p0 += 1;
            cur += 1;
        } else if (nums[cur] === 2) {
            swap(nums, p2, cur);
            p2 -= 1;
        } else {
            cur += 1;
        }
    }

    return nums;
};

function swap(nums, left, right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}
