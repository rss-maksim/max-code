4. implement basic throttle()

Difficulty: Medium

[4. implement basic throttle()](https://bigfrontend.dev/problem/implement-basic-throttle)

Throttling is a common technique used in Web Application, in most cases using lodash solution would be a good choice.

could you implement your own version of basic throttle()?

In case you forgot, throttle(func, delay) will return a throttled function, which will invoke the func at a max frequency no matter how throttled one is called.

Here is an example.

Before throttling we have a series of calling like
─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

After throttling at wait time of 3 dashes

─A─ ─ ─C─ ─ ─D ─ ─ ─ ─ E─ ─ ─G

Be aware that
 - call A is triggered right way because not in waiting time
 - function call B is swallowed because B, C is in the cooling time from A, and C is latter.

Something like below will be used to do the test.

```js
let currentTime = 0

const run = (input) => {
    currentTime = 0
    const calls = []

    const func = (arg) => {
        calls.push(`${arg}@${currentTime}`)
    }

    const throttled = throttle(func, 3)
    input.forEach((call) => {
        const [arg, time] = call.split('@')
        setTimeout(() => throttled(arg), time)
    })
    return calls
}

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])
```
