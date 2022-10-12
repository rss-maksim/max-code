/**
 * Complexity:
 * O(M*N) time
 * O(M*N) space
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

const QUALITY = {
    fresh: 1,
    rotten: 2,
};

export const orangesRotting = (grid) => {
    const rows = grid.length;
    const col = grid[0].length;
    const queue = [];
    let minMinutes = 0;
    let fresh = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === QUALITY.fresh) {
                fresh += 1;
            }
            if (grid[i][j] === QUALITY.rotten) {
                queue.push([i, j]);
            }
        }
    }

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            if (x - 1 >= 0 && grid[x - 1][y] === QUALITY.fresh) {
                grid[x - 1][y] = QUALITY.rotten;
                queue.push([x - 1, y]);
                fresh -= 1;
            }

            if (x + 1 < rows && grid[x + 1][y] === QUALITY.fresh) {
                grid[x + 1][y] = QUALITY.rotten;
                queue.push([x + 1, y]);
                fresh -= 1;
            }

            if (y - 1 >= 0 && grid[x][y - 1] === QUALITY.fresh) {
                grid[x][y - 1] = QUALITY.rotten;
                queue.push([x, y - 1]);
                fresh -= 1;
            }

            if (y + 1 < col && grid[x][y + 1] === QUALITY.fresh) {
                grid[x][y + 1] = QUALITY.rotten;
                queue.push([x, y + 1]);
                fresh -= 1;
            }
        }

        if (queue.length > 0) {
            minMinutes += 1;
        }
    }

    return fresh === 0 ? minMinutes : -1;
}
