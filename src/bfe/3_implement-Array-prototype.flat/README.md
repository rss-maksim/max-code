# 3. implement Array.prototype.flat()

Difficulty: Easy

[3. implement Array.prototype.flat()](https://bigfrontend.dev/problem/implement-Array-prototype.flat)

There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example:

```js
const arr = [1, [2], [3, [4]]];

flat(arr);
// [1, 2, 3, [4]]

flat(arr, 1);
// [1, 2, 3, [4]]

flat(arr, 2);
// [1, 2, 3, 4]
```
