/**
 * Complexity:
 * O(n^2) time
 * O(1) space
 */

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = (s) => {
    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i, s);
        const len2 = expandAroundCenter(i, i + 1, s);
        const len = Math.max(len1, len2);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(left, right, str) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left -= 1;
        right += 1;
    }

    return right - left - 1;
}
