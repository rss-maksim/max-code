/**
 * Complexity:
 * O(n) time
 * O(1) space
 */

/**
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
        left += 1;
    } else {
        right -= 1;
    }
  }

  return maxArea;
}
