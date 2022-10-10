import { MinStack } from './';

test('155. Min Stack problem', () => {
    const minStack = new MinStack();
    minStack.push(3);

    expect(minStack.getMin()).toBe(3);

    minStack.push(-2);

    expect(minStack.getMin()).toBe(-2);

    minStack.push(4);
    minStack.push(8);

    expect(minStack.top()).toBe(8);
    expect(minStack.getMin()).toBe(-2);

    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3);
    expect(minStack.top()).toBe(-3);

    minStack.pop();
    expect(minStack.getMin()).toBe(-2);
});
