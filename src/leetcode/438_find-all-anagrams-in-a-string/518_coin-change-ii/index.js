/**
 * Complexity:
 * O(n) time
 * O(1) space
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export const findAnagrams = (s, p) => {
    if (s.length < p.length) {
        return [];
    }
    const startAlphabetIndex = 'a'.charCodeAt(0);
    const alphabetSize = 'z'.charCodeAt(0) - startAlphabetIndex + 1;
    const sHashMap = new Array(alphabetSize).fill(0);
    const pHashMap = new Array(alphabetSize).fill(0);

    const result = [];

    for (const char of p) {
        const index = char.charCodeAt(0) - startAlphabetIndex;
        pHashMap[index] += 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charIndex = char.charCodeAt(0) - startAlphabetIndex;
        sHashMap[charIndex] += 1;

        if (i >= p.length) {
            const lastAddedChar = s[i - p.length];
            const index = lastAddedChar.charCodeAt(0) - startAlphabetIndex;
            sHashMap[index] -= 1;
        }

        if (sHashMap.join() === pHashMap.join()) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}
