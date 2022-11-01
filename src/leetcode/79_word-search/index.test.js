import { exist } from './';

test('79. Word Search problem', () => {
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')).toBe(true);

    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')).toBe(true);

    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')).toBe(false);
});
