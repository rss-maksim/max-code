import { longestPalindrome } from './';

test('5. Longest Palindromic Substring problem', () => {
    expect(longestPalindrome('babad')).toBe('bab');

    expect(longestPalindrome('cbbd')).toBe('bb');

    expect(longestPalindrome('')).toBe('');

    expect(longestPalindrome('a')).toBe('a');

    expect(longestPalindrome('abcdcba')).toBe('abcdcba');
});
