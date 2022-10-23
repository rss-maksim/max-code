/**
 * Complexity:
 * O(m*n) time
 * O(1) space
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = (matrix) => {
    let startCol = 0;
    let endCol = matrix[0].length - 1;
    let startRow = 0;
    let endRow = matrix.length - 1
    const result = [];

    while (startCol <= endCol && startRow <= endRow) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(matrix[startRow][col]);
        }

        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(matrix[row][endCol]);
        }

        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) {
                break;
            }
            result.push(matrix[endRow][col]);
        }

        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) {
                break;
            }
            result.push(matrix[row][startCol]);
        }

        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    }

    return result;
}
