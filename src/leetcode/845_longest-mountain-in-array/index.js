/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {number[]} mountain
 * @return {number}
 */
export const longestMountain = (mountain) => {
    let longestLength = 0;

    let i = 1;
    while (i < mountain.length - 1) {
        const hasPeak = mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1];
        if (!hasPeak) {
            i += 1;
            continue;
        }
        let leftIndex = i - 2;
        while (leftIndex >= 0 && mountain[leftIndex] < mountain[leftIndex + 1]) {
            leftIndex -= 1;
        }

        let rightIndex = i + 2;
        while (rightIndex < mountain.length && mountain[rightIndex] < mountain[rightIndex - 1]) {
            rightIndex += 1;
        }

        longestLength = Math.max(longestLength, rightIndex - leftIndex - 1);
        i = rightIndex;
    }

    return longestLength;
}
