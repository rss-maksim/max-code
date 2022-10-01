/**
 * Complexity:
 * O(N) time
 * O(min(N,M)) space
 */

/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = (s) => {
    const map = new Map();
    let max = 0;
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!map.has(char) || map.get(char) < startIndex) {
            max = Math.max(max, i - startIndex + 1);
        } else {
            startIndex = map.get(char) + 1;
        }
        map.set(char, i);
    }

    return max;
}
