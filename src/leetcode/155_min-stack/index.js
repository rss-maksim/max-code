/**
 * Complexity:
 * O(1) time
 * O(1) space
 */

export class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} value
     * @return {void}
     */
    push(value) {
        this.stack.push(value);
        let nextMin = value;
        if (this.minStack.length > 0) {
            const minTop = this.minStack[this.minStack.length - 1];
            nextMin = Math.min(minTop, nextMin);
        }
        this.minStack.push(nextMin);
    }

    /**
     * @return {number}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
