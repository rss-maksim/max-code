import {ListNode, reverseList} from './';

function createLinkedListFromArray(list) {
    const preHead = new ListNode();
    let currentNode = preHead;
    for (let value of list) {
        currentNode.next = new ListNode(value);
        currentNode = currentNode.next;
    }
    return preHead.next;
}

test('206. Reverse Linked List', () => {

    expect(reverseList(createLinkedListFromArray([1,2,3,4,5]))).toStrictEqual(createLinkedListFromArray([5,4,3,2,1]));

    expect(reverseList(createLinkedListFromArray([1,2]))).toStrictEqual(createLinkedListFromArray([2,1]));

    expect(reverseList(createLinkedListFromArray([]))).toStrictEqual(createLinkedListFromArray([]));
});
