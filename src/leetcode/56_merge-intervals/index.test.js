import { merge } from './';

test('56. Merge Intervals problem', () => {
    expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);

    expect(merge([[1,4],[4,5]])).toEqual([[1,5]]);

    expect(merge([[1,2]])).toEqual([[1,2]]);
});
