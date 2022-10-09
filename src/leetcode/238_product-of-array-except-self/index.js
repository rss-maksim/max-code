/**
 * Complexity:
 * O(n) time
 * O(1) space
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = (nums) => {
    const output = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i] * output[i - 1] * nums[i - 1];
    }

    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output;
}
