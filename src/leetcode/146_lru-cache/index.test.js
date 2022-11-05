import { LRUCache } from './';

test('146. LRU Cache problem', () => {
    const lruCache = new LRUCache(2);

    lruCache.put(1, 1);

    lruCache.put(2, 2);

    expect(lruCache.get(1)).toBe(1);

    lruCache.put(3, 3);

    expect(lruCache.get(2)).toBe(-1);

    lruCache.put(4, 4);

    expect(lruCache.get(1)).toBe(-1);

    expect(lruCache.get(3)).toBe(3);

    expect(lruCache.get(4)).toBe(4);
});
