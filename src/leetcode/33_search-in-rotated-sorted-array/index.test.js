import { search } from './';

test('33. Search in Rotated Sorted Array problem', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);

    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);

    expect(search([1], 0)).toBe(-1);

    expect(search([2, 3, 1], 3)).toBe(1);
});
