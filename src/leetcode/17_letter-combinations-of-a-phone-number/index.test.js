import { letterCombinations } from './';

test('17. Letter Combinations of a Phone Number problem', () => {
    expect(letterCombinations('23')).toEqual([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
    ]);

    expect(letterCombinations('')).toEqual([]);

    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
});
