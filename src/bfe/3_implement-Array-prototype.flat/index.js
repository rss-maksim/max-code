/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
export function flat(arr, depth = 1) {
    depth = depth ?? 1;
    if (depth === 0) {
        return arr;
    }
    return arr.reduce((acc, value) => {
        const values = Array.isArray(value) ? flat(value, depth - 1) : [value];
        return [...acc, ...values];
    }, []);
}
