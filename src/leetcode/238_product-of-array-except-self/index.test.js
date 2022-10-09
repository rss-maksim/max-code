import { productExceptSelf } from './';

test('238. Product of Array Except Self problem', () => {
    expect(productExceptSelf([1,2,3,4])).toStrictEqual([24,12,8,6]);

    expect(
        productExceptSelf([-1,1,0,-3,3]).map((item) => item > 0 ? item : 0)
    ).toStrictEqual([0,0,9,0,0]);
});
