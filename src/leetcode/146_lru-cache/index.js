/**
 * Complexity:
 * O(1) time
 * O(1) space
 */

export class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = new Map();
        this.head = new DoubleLinkedList();
        this.tail = new DoubleLinkedList();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.head === this.tail) {
            return -1;
        }
        const node = this.cache.get(key);
        if (!node) {
            return -1;
        }
        this.moveToHead(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.cache.has(key)) {
            const newNode = new DoubleLinkedList(key, value);
            this.cache.set(key, newNode);
            this.addNode(newNode);
            this.size += 1;

            if (this.size > this.capacity) {
                const tail = this.popTail();
                this.cache.delete(tail.key);
                this.size -= 1;
            }
        } else {
            const node = this.cache.get(key);
            node.value = value;
            this.cache.set(key, node);
            this.moveToHead(node);
        }
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    removeNode(node) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    popTail() {
        const nodeToRemove = this.tail.prev;
        this.removeNode(nodeToRemove);
        return nodeToRemove;
    }
}

class DoubleLinkedList {
    constructor(key = 0, value = 0, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
