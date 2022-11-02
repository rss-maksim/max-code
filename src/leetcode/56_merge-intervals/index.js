/**
 * Complexity:
 * O(nlogn) time
 * O(n) space
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const lastIndex = result.length - 1;
        const [, lastEnd] = result[lastIndex];

        if (start <= lastEnd) {
            result[lastIndex][1] = Math.max(end, lastEnd);
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
};
