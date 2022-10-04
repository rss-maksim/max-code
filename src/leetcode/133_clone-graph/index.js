/**
 * Complexity:
 * O(N+M) time, N - number of nodes (vertices), M - number of edges
 * O(N) space
 */

/**
 * // Definition for a Node.
 */
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
export const cloneGraph = (node) => {
    if (!node) {
        return node;
    }
    const visited = new Map();
    const queue = [node];

    visited.set(node, new Node(node.val, []));

    while (queue.length) {
        const current = queue.shift();

        for (const neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val, []));
                queue.push(neighbor);
            }
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }

    return visited.get(node);
}
