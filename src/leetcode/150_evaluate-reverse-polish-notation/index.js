/**
 * Complexity:
 * O(N) time
 * O(N) space
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
export const evalRPN = (tokens) => {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => parseInt(a / b),
    };
    const stack = [];

    for (const token of tokens) {
        if (token in operators) {
            const last = stack.pop();
            const preLast = stack.pop();
            const operation = operators[token];
            stack.push(operation(preLast, last));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};
