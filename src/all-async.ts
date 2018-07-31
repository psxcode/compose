function allAsync<R0, R1, R2, R3, R4, R5, R6, R7> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1, fn2: () => Promise<R2> | R2, fn3: () => Promise<R3> | R3, fn4: () => Promise<R4> | R4, fn5: () => Promise<R5> | R5, fn6: () => Promise<R6> | R6, fn7: () => Promise<R7> | R7): Promise<[R0, R1, R2, R3, R4, R5, R6, R7]>
function allAsync<ARG, R0, R1, R2, R3, R4, R5, R6, R7> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1, fn2: (arg: ARG) => Promise<R2> | R2, fn3: (arg: ARG) => Promise<R3> | R3, fn4: (arg: ARG) => Promise<R4> | R4, fn5: (arg: ARG) => Promise<R5> | R5, fn6: (arg: ARG) => Promise<R6> | R6, fn7: (arg: ARG) => Promise<R7> | R7): Promise<[R0, R1, R2, R3, R4, R5, R6, R7]>

function allAsync<R0, R1, R2, R3, R4, R5, R6> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1, fn2: () => Promise<R2> | R2, fn3: () => Promise<R3> | R3, fn4: () => Promise<R4> | R4, fn5: () => Promise<R5> | R5, fn6: () => Promise<R6> | R6): Promise<[R0, R1, R2, R3, R4, R5, R6]>
function allAsync<ARG, R0, R1, R2, R3, R4, R5, R6> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1, fn2: (arg: ARG) => Promise<R2> | R2, fn3: (arg: ARG) => Promise<R3> | R3, fn4: (arg: ARG) => Promise<R4> | R4, fn5: (arg: ARG) => Promise<R5> | R5, fn6: (arg: ARG) => Promise<R6> | R6): Promise<[R0, R1, R2, R3, R4, R5, R6]>

function allAsync<R0, R1, R2, R3, R4, R5> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1, fn2: () => Promise<R2> | R2, fn3: () => Promise<R3> | R3, fn4: () => Promise<R4> | R4, fn5: () => Promise<R5> | R5): () => Promise<[R0, R1, R2, R3, R4, R5]>
function allAsync<ARG, R0, R1, R2, R3, R4, R5> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1, fn2: (arg: ARG) => Promise<R2> | R2, fn3: (arg: ARG) => Promise<R3> | R3, fn4: (arg: ARG) => Promise<R4> | R4, fn5: (arg: ARG) => Promise<R5> | R5): (arg: ARG) => Promise<[R0, R1, R2, R3, R4, R5]>

function allAsync<R0, R1, R2, R3, R4> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1, fn2: () => Promise<R2> | R2, fn3: () => Promise<R3> | R3, fn4: () => Promise<R4> | R4): () => Promise<[R0, R1, R2, R3, R4]>
function allAsync<ARG, R0, R1, R2, R3, R4> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1, fn2: (arg: ARG) => Promise<R2> | R2, fn3: (arg: ARG) => Promise<R3> | R3, fn4: (arg: ARG) => Promise<R4> | R4): (arg: ARG) => Promise<[R0, R1, R2, R3, R4]>

function allAsync<R0, R1, R2, R3> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1, fn2: () => Promise<R2> | R2, fn3: () => Promise<R3> | R3): () => Promise<[R0, R1, R2, R3]>
function allAsync<ARG, R0, R1, R2, R3> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1, fn2: (arg: ARG) => Promise<R2> | R2, fn3: (arg: ARG) => Promise<R3> | R3): (arg: ARG) => Promise<[R0, R1, R2, R3]>

function allAsync<R0, R1, R2> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1, fn2: () => Promise<R2> | R2): () => Promise<[R0, R1, R2]>
function allAsync<ARG, R0, R1, R2> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1, fn2: (arg: ARG) => Promise<R2> | R2): (arg: ARG) => Promise<[R0, R1, R2]>

function allAsync<R0, R1> (fn0: () => Promise<R0> | R0, fn1: () => Promise<R1> | R1): () => Promise<[R0, R1]>
function allAsync<ARG, R0, R1> (fn0: (arg: ARG) => Promise<R0> | R0, fn1: (arg: ARG) => Promise<R1> | R1): (arg: ARG) => Promise<[R0, R1]>

function allAsync<R0> (fn: () => Promise<R0> | R0): () => Promise<[R0]>
function allAsync<ARG, R0> (fn: (arg: ARG) => Promise<R0> | R0): (arg: ARG) => Promise<[R0]>

function allAsync (): () => Promise<[]>
function allAsync (...fns: any[]): any {
  return (value: any) => {
    return Promise.all(
      fns.length > 0
        ? value !== undefined
          ? fns.map(fn => Promise.resolve(fn(value)))
          : fns.map(fn => Promise.resolve(fn()))
        : []
    )
  }
}

export default allAsync
