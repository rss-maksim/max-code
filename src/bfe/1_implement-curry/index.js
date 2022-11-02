/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
export const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.call(this, ...args);
        }
        return (...otherArgs) => {
            return curried.call(this, ...args, ...otherArgs);
        };
    };
};
