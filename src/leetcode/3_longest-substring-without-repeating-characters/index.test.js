import { lengthOfLongestSubstring } from './';

test('3. Longest Substring Without Repeating Characters problem', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);

    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);

    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);

    expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5);

    expect(lengthOfLongestSubstring('dvdf')).toBe(3);

    expect(lengthOfLongestSubstring('')).toBe(0);
});
