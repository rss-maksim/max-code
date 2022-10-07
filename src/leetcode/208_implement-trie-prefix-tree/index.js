export class Trie {
    root = {};

    /**
     * Complexity:
     * O(m) time
     * O(m) space
     * `m` is the key length
     */

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {Trie} node
     */
    traverse(word) {
        let node = this.root;

        for (const char of word) {
            node = node[char];
            if (node === null) {
                return null;
            }
        }
        return node;
    }

    /**
     * Complexity:
     * O(m) time
     * O(1) space
     * `m` is the key length
     */
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this.traverse(word);
        return node !== null && node.isEnd === true;
    }

    /**
     * Complexity:
     * O(m) time
     * O(1) space
     * `m` is the prefix length
     */
    /**
    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.traverse(prefix) !== null;
    }
}
