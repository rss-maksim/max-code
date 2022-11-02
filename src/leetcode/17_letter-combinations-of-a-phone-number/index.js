/**
 * Complexity:
 * O(4^N * N) time
 * O(N) space
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations = (digits) => {
    if (!digits.length) {
        return [];
    }

    const combinations = [];
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const backtrack = (index, path) => {
        if (path.length === digits.length) {
            combinations.push(path.join(''));
            return;
        }

        const possibleLetters = letters[digits[index]];

        for (const letter of possibleLetters) {
            path.push(letter);
            backtrack(index + 1, [...path]);
            path.pop();
        }
    };

    backtrack(0, []);

    return combinations;
};
