/**
 * Complexity:
 * O(∑k=1...N P(N, k)) time, where P(N, k) = N(N-1)...(N-k+1)
 * O(N!) space
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = (nums) => {
    const len = nums.length;
    const permutations = [];

    const backtrack = (first = 0) => {
        if (first === len) {
            permutations.push([...nums]);
        }

        for (let i = first; i < len; i++) {
            const temp = nums[first];
            nums[first] = nums[i];
            nums[i] = temp;

            backtrack(first + 1);

            nums[i] = nums[first];
            nums[first] = temp;
        }
    }

    backtrack();

    return permutations;
};
