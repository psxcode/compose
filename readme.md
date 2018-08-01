## Compose

### Usage

#### compose / composeAsync
Sequential function composition, passing return value of the previous function as an argument to the next one
```ts
import compose from '@psxcode/compose/compose'

const add4 = (a: number) => a + 4
const mult2 = (a: number) => a * 2

const comp = compose(mult2, add4)

comp(2) // (2 + 4) * 2 => 12
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

#### pipe / pipeAsync

#### all / allAsync
