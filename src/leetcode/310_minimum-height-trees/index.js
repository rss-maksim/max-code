/**
 * Complexity:
 * O(V) time
 * O(V) space
 * V is a number of nodes in a graph
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
export const findMinHeightTrees = (n, edges) => {
    if (!edges || n <= 2) {
        return Array.from({ length: n }, (_, i) => i);
    }

    let graph = [];

    // build a graph with the adjacency list from the input
    for (const [start, end] of edges) {
        if (!graph[start]) {
            graph[start] = [];
        }
        graph[start].push(end);

        if (!graph[end]) {
            graph[end] = [];
        }
        graph[end].push(start);
    }

    let leaves = [];
    // initialize the first layer of leaves
    for (let i = 0; i < graph.length; i++) {
        if (graph[i].length === 1) {
            leaves.push(i);
        }
    }

    while (n > 2) {
        n = n - leaves.length;
        const nextLeaves = [];

        for (const leave of leaves) {
            const node = graph[leave].pop();

            graph[node] = graph[node].filter(
                (_, index) => index !== graph[node].indexOf(leave)
            );

            if (graph[node].length === 1) {
                nextLeaves.push(node);
            }
        }
        leaves = nextLeaves;
    }

    return leaves;
};
