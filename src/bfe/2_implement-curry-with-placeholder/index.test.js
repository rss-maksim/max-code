import { curry } from './';

test('2. implement curry() with placeholder support', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`;
    const _ = curry.placeholder;

    const curriedJoin = curry(join);

    expect(
        curriedJoin(1, 2, 3)
    ).toBe('1_2_3');

    expect(
        curriedJoin(_, 2)(1, 3)
    ).toBe('1_2_3');

    expect(
        curriedJoin(_, _, _)(1)(_, 3)(2)
    ).toBe('1_2_3');
});
