/**
 * Complexity:
 * O(N logN) time
 * O(N) space
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
export const kClosest = (points, k) => {
    points.sort((a, b) => {
        return Math.sqrt(a[0] ** 2 + a[1] ** 2) - Math.sqrt(b[0] ** 2 + b[1] ** 2);
    });

    return points.slice(0, k);
}
