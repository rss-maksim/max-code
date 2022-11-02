/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = (s) => {
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    const stack = [];
    const openBrackets = Object.values(map);

    for (let char of s) {
        if (char in map) {
            const last = stack.pop();
            if (last !== map[char]) {
                return false;
            }
        } else if (openBrackets.includes(char)) {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
