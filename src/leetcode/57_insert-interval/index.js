/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export const insert = (intervals, newInterval) => {
    let i = 0;
    const [newStart, newEnd] = newInterval;
    const result = [];

    while (i < intervals.length && newStart > intervals[i][0]) {
        result.push(intervals[i]);
        i += 1;
    }

    if (result.length === 0 || newStart > result[result.length - 1][1]) {
        result.push(newInterval);
    } else {
        result[result.length - 1][1] = Math.max(newEnd, result[result.length - 1][1]);
    }

    while (i < intervals.length) {
        const [start, end] = intervals[i];
        if (start > result[result.length - 1][1]) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][1] = Math.max(end, result[result.length - 1][1]);
        }
        i += 1;
    }

    return result;
}
