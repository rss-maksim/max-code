/**
 * Complexity:
 * O(n^(T/M + 1)) time
 * O(T/M) space
 * `N` the number of candidates, `T` - target value, M - minimum value among the candidates
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum = (candidates, target) => {
    const result = [];

    const backtrack = (remainder, combinations, startIndex) => {
        if (remainder === 0) {
            result.push([...combinations]);
            return;
        }
        if (remainder < 0) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            combinations.push(candidates[i]);

            backtrack(remainder - candidates[i], combinations, i);

            combinations.pop();
        }
    };

    backtrack(target, [], 0);

    return result;
};
