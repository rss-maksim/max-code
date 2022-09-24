/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = (head) => {
    let prev = null;
    let currentNode = head;

    while (currentNode) {
        const next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
    }
    return prev;
}

/**
 * Definition for singly-linked list.
 */
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
