# 2. implement curry() with placeholder support

Difficulty: Easy

[2. implement curry() with placeholder support](https://bigfrontend.dev/problem/implement-curry-with-placeholder)

Implement curry() which also supports placeholder.

Here is an example:

```js
const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;

curriedJoin(1, 2, 3); // '1_2_3'

curriedJoin(_, 2)(1, 3); // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2); // '1_2_3'
```
