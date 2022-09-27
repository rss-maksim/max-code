import {ListNode, middleNode} from './';

function createLinkedListFromArray(list) {
    if (!list.length) {
        return null;
    }
    const preHead = new ListNode();
    let currentNode = preHead;
    for (let value of list) {
        currentNode.next = new ListNode(value);
        currentNode = currentNode.next;
    }
    return preHead.next;
}

test('876. Middle of the Linked List', () => {

    expect(
        middleNode(createLinkedListFromArray([1,2,3,4,5]))
    ).toStrictEqual(createLinkedListFromArray([3,4,5]));

    expect(
        middleNode(createLinkedListFromArray([1,2,3,4,5,6]))
    ).toStrictEqual(createLinkedListFromArray([4,5,6]));

    expect(middleNode(
        createLinkedListFromArray([]))
    ).toBe(null)
});
