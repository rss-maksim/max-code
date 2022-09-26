import { curry } from './';

test('1. implement curry()', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`
    const curriedJoin = curry(join);

    expect(
        curriedJoin(1, 2, 3)
    ).toBe('1_2_3');

    expect(
        curriedJoin(1)(2, 3)
    ).toBe('1_2_3');

    expect(
        curriedJoin(1, 2)(3)
    ).toBe('1_2_3');
});
