/**
 * Complexity:
 * O(r * c) time
 * O(1) space
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
export const updateMatrix = (matrix) => {
    const rows = matrix.length;
    if (rows === 0) return matrix;

    const cols = matrix[0].length;
    const dist = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => Number.MAX_VALUE)
    );

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                dist[i][j] = 0;
            } else {
                if (i > 0) {
                    dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
                }
                if (j > 0) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
                }
            }
        }
    }

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            if (i < rows - 1) {
                dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
            }
            if (j < cols - 1) {
                dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
            }
        }
    }

    return dist;
};
