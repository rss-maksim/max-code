import { TimeMap } from './';

test('981. Time Based Key-Value Store problem', () => {
    const timeMap = new TimeMap();

    timeMap.set('key', 'value', 1);

    expect(timeMap.get('key', 1)).toBe('value');

    expect(timeMap.get('key', 3)).toBe('value');

    timeMap.set('key', 'value2', 4);

    expect(timeMap.get('key', 4)).toBe('value2');

    expect(timeMap.get('key', 5)).toBe('value2');
});
