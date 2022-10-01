import { isValid } from './';

test('20. Valid Parentheses problem', () => {
    expect(isValid('()')).toBe(true);

    expect(isValid('()[]{}')).toBe(true);

    expect(isValid('(]')).toBe(false);

    expect(isValid('((((((((((()))))))))}')).toBe(false);
});
