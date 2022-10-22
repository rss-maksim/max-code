/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {string} s
 * @return {number}
 */
export const myAtoi = (s) => {
   s = s.trimStart();
   if (!s) return 0;

   const digits = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9'};
   const MIN_VALUE = -Math.pow(2, 31);
   const MAX_VALUE = Math.pow(2, 31) - 1;
   
   let sign = 1;

   let num = '';
   for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in digits)) {
        if (i === 0) {
            if (char === '-') {
                sign = -1;
            }
        } else {
            break;
        }
    } else {
        num += char;
    }
   }

   if (!num) {
    return 0;
   }

   num = +num;

   if (num < MIN_VALUE) {
    num = MIN_VALUE;
   } else if (num > MAX_VALUE) {
    num = MAX_VALUE;
   }

   return num;
}
