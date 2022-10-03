/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
export function throttle(func, wait) {
    let isDelayed = false;
    let relevantArgs = null;

    return function(...args) {
        if (isDelayed) {
            relevantArgs = args;
        } else {
            func.apply(this, args);
            isDelayed = true;

            const checkForNewCalls = () => {
                return setTimeout(() => {
                    isDelayed = false;
                    if (relevantArgs) {
                        func.apply(this, relevantArgs);
                        isDelayed = true;
                        relevantArgs = null;
                        checkForNewCalls();
                    }
                }, wait);
            }

            checkForNewCalls();
        }
    }
}
