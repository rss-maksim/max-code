import { throttle } from './';

test('4. implement basic throttle()', (done) => {
    let currentTime = 0;

    const run = async (input) => {
        currentTime = 0;
        const calls = [];

        const func = (arg) => {
            calls.push(`${arg}@${currentTime}`);
        };

        const throttled = throttle(func, 3);
        input.forEach((call) => {
            const [arg, time] = call.split('@');
            throttled(arg);
        });

        try {
            expect(calls).toStrictEqual(['A@0']);
            done();
        } catch (error) {
            done(error);
        }
    };

    run(['A@0', 'B@1', 'C@3']);
});
