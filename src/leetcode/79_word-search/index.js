/**
 * Complexity:
 * O(3^L * N) time, L is lenght of the word
 * O(L) space
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export const exist = (board, word) => {
  const backtrack = (i, j, suffix) => {
    if (suffix.length === 0) {
        return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return false;
    }

    if (board[i][j] !== suffix[0]) {
        return false;
    }

    let result = false;
    board[i][j] = '#';

    for (const [row, col] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        result = backtrack(i + row, j + col, suffix.slice(1));
        if (result) {
            break;
        }
    }

    board[i][j] = suffix[0];

    return result;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
        if (backtrack(i, j, word)) {
            return true;
        }
    }
  }

  return false;
}
