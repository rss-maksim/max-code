/**
 * Complexity:
 * O(N) time
 * O(1) space
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * Definition for singly-linked list.
 */
export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
