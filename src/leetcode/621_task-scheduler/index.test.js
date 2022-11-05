import { leastInterval } from './';

test('`621. Task Scheduler` problem', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);

    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6);

    expect(
        leastInterval(
            ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
            2
        )
    ).toBe(16);
});
