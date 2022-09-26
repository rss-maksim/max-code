import { addBinary } from './';

test('67. Add Binary problem', () => {
    expect(addBinary('11', '1')).toBe('100');

    expect(addBinary('1010', '1011')).toBe('10101');
});
