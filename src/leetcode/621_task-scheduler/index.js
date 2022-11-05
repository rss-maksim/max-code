/**
 * Complexity:
 * O(N) time, since the `frequencies` array is length of `ALPHABET_SIZE`
 * O(1) space
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
export const leastInterval = (tasks, n) => {
    const ALPHABET_SIZE = 26;

    const frequencies = new Array(ALPHABET_SIZE).fill(0);

    for (const task of tasks) {
        frequencies[task.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
    }

    frequencies.sort((a, b) => a - b);

    const maxFreq = frequencies.pop();
    let idleTime = (maxFreq - 1) * n;

    while (frequencies.length > 0 && idleTime > 0) {
        idleTime -= Math.min(frequencies.pop(), maxFreq - 1);
    }

    idleTime = Math.max(0, idleTime);

    return tasks.length + idleTime;
};
