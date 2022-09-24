import { majorityElement } from './';

test('169. Majority Element problem', () => {
    expect(majorityElement([3,2,3])).toBe(3);

    expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
});
