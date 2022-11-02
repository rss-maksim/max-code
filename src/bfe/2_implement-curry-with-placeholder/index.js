/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
export function curry(fn) {
    return function curried(...args) {
        const relevantArgs = args.slice(0, fn.length);
        const hasPlaceholder = relevantArgs.includes(curry.placeholder);

        if (relevantArgs.length >= fn.length && !hasPlaceholder) {
            return fn.apply(this, relevantArgs);
        }

        return (...nextArgs) => {
            return curried.apply(this, combineArgs(relevantArgs, nextArgs));
        };
    };
}

function combineArgs(args = [], nextArgs = []) {
    const trueArgs = args.reduce((acc, arg) => {
        const nextArg =
            arg === curry.placeholder && nextArgs.length
                ? nextArgs.shift()
                : arg;
        return [...acc, nextArg];
    }, []);

    return [...trueArgs, ...nextArgs];
}

curry.placeholder = Symbol();
