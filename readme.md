# Compose

### Install
```
npm install @psxcode/compose
```

### Usage
### `compose` / `composeAsync`
Sequential function composition, passing return value of the previous function as an argument to the next one. Functions are being invoked in reverse order.
```ts
import { compose } from '@psxcode/compose'

const add4 = (a: number) => a + 4
const mult2 = (a: number) => a * 2

const comp = compose(mult2, add4)

comp(2) // (2 + 4) * 2 => 12
```
`composeAsync` accepts both `sync` and `async` functions
```ts
import { composeAsync } from '@psxcode/compose'

const add4Async = async (arg: number) => arg + 4
const mult2 = (a: number) => a * 2

// (number) => Promise<number>
const comp = composeAsync(mult2, add4Async)

await comp(2) // (2 + 4) * 2 => 12
```
The types are properly preserved
```ts

// (number) => string
compose(
  (val: any) => `${val}`,
  (val: number) => val * 2
)

// (string[]) => boolean
compose(
  (val: number) => val % 2 === 0,
  compose(
    (val: number[]) => val[0] || 0,
    (val: string[]) => val.map(v => v.length) 
  )
)
```

### `pipe` / `pipeAsync`
Sequential function composition, passing return value of the previous function as an argument to the next one. Functions are being invoked in direct order.
```ts
import { pipe } from '@psxcode/compose'

const add4 = (a: number) => a + 4
const mult2 = (a: number) => a * 2

// (number) => number
const comp = pipe(mult2, add4)

comp(2) // (2 * 2) + 4 => 8
```
`pipeAsync` accepts both `sync` and `async` functions.
```ts
import { pipeAsync } from '@psxcode/compose'

const add4 = (a: number) => a + 4
const mult2 = (a: number) => a * 2

// (number) => Promise<number>
const comp = pipeAsync(mult2, add4)

await comp(2) // (2 * 2) + 4 => 8
```

### `all` / `allAsync`
Parallel function composition, passing the initial value to all functions, and returning an array of results.
```ts
import { all } from '@psxcode/compose'

const add4 = (a: number) => a + 4
const mult2 = (a: number) => a * 2
const toString = (a: number) => `${a}`

// (number) => [number, number, string]
const comp = all(mult2, add4, toString)

comp(2) // [8, 6, '2']
```
`allAsync` accepts both `sync` and `async` functions
```ts
import { allAsync } from '@psxcode/compose'

const add4 = (a: number) => a + 4
const mult2 = async (a: number) => a * 2
const toString = (a: number) => `${a}`

// (number) => Promise<[number, number, string]>
const comp = allAsync(mult2, add4, toString)

await comp(2) // [8, 6, '2']
```
