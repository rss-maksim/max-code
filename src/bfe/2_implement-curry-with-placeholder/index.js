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
            return curried.apply(this, combineArgs(args, nextArgs));
        }
    }
}

function combineArgs(args = [], nextArgs = []) {
    let argsIndex = 0;
    let nextArgsIndex = 0;

    while (argsIndex < args.length) {
        if (args[argsIndex] === curry.placeholder) {
            args[argsIndex] = nextArgs[nextArgsIndex];
            nextArgsIndex += 1;
        }
        argsIndex += 1;
    }

    return [...args, nextArgs.slice(nextArgsIndex)];
}


curry.placeholder = Symbol()
