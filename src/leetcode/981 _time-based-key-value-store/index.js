/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
export class TimeMap {
    constructor() {
        this.timeMap = {};
    }

    /**
     * Complexity:
     * O(M*L) time
     * O(M*L) space
     */
    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!(key in this.timeMap)) {
            this.timeMap[key] = Array();
        }
        this.timeMap[key].push([timestamp, value]);
    }

    /**
     * Complexity:
     * O(N*L*logM) time
     * O(1) space
     */
    /** 
    /** 
     * @param {string} key 
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!(key in this.timeMap)) {
            return '';
        }

        if (timestamp < this.timeMap[key][0][0]) {
            return '';
        }

        let left = 0;
        let right = this.timeMap[key].length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (this.timeMap[key][mid][0] <= timestamp) {
                left = mid + 1;
            } else {
                rigth = mid;
            }
        }

        if (right === 0) {
            return '';
        }

        return this.timeMap[key][right - 1][1];
    }
}
