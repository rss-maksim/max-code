import { myAtoi } from './';

test('8. String to Integer (atoi) problem', () => {
    expect(myAtoi('42')).toBe(42);

    expect(myAtoi('   -42')).toBe(42);

    expect(myAtoi('4193 with words')).toBe(4193);

    expect(myAtoi('words and 987')).toBe(0);

    expect(myAtoi('+1')).toBe(1);

    expect(myAtoi('')).toBe(0);

    expect(myAtoi('+')).toBe(0);
});
