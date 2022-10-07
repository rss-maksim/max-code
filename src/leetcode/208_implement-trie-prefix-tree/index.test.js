import { Trie } from './';

test('208. Implement Trie (Prefix Tree)', () => {
    const trie = new Trie();

    trie.insert('apple');

    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);

    trie.insert('app');

    expect(trie.search('app')).toBe(true);
});
