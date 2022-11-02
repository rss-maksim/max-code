/**
 * Complexity:
 * O(N + M) time
 * O(max(N, M)) space
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = (a, b) => {
    const maxLength = Math.max(a.length, b.length);

    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    let sum = '';
    let carry = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
        const currentSum = Number(a[i]) + Number(b[i]) + carry;
        const currentBit = currentSum % 2;
        carry = currentSum > 1 ? 1 : 0;
        sum = `${currentBit}${sum}`;
    }

    if (carry > 0) {
        sum = `1${sum}`;
    }

    return sum;
};
