import { canPartition } from './';

test('416. Partition Equal Subset Sum', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);

    expect(canPartition([1, 2, 3, 5])).toBe(false);

    expect(canPartition([10])).toBe(false);
});
