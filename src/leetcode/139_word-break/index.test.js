import { wordBreak } from './';

test('139. Word Break problem', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);

    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);

    expect(wordBreak('aaaaaaa', ['aaaa', 'aaa'])).toBe(true);

    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(
        false
    );
});
