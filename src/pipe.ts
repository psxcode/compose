function pipe<A, B, C, D, E, F, G, H, I> (fn0: (arg: A) => B, fn1: (arg: B) => C, fn2: (arg: C) => D, fn3: (arg: D) => E, fn4: (arg: E) => F, fn5: (arg: F) => G, fn6: (arg: G) => H, fn7: (arg: H) => I): (arg: A) => I
function pipe<A, B, C, D, E, F, G, H> (fn0: (arg: A) => B, fn1: (arg: B) => C, fn2: (arg: C) => D, fn3: (arg: D) => E, fn4: (arg: E) => F, fn5: (arg: F) => G, fn6: (arg: G) => H): (arg: A) => H
function pipe<A, B, C, D, E, F, G> (fn0: (arg: A) => B, fn1: (arg: B) => C, fn2: (arg: C) => D, fn3: (arg: D) => E, fn4: (arg: E) => F, fn5: (arg: F) => G): (arg: A) => G
function pipe<A, B, C, D, E, F> (fn0: (arg: A) => B, fn1: (arg: B) => C, fn2: (arg: C) => D, fn3: (arg: D) => E, fn4: (arg: E) => F): (arg: A) => F
function pipe<A, B, C, D, E> (fn0: (arg: A) => B, fn1: (arg: B) => C, fn2: (arg: C) => D, fn3: (arg: D) => E): (arg: A) => E
function pipe<A, B, C, D> (fn0: (arg: A) => B, fn1: (arg: B) => C, fn2: (arg: C) => D): (arg: A) => D
function pipe<A, B, C> (fn0: (arg: A) => B, fn1: (arg: B) => C): (arg: A) => C
function pipe<A, B> (fn: (arg: A) => B): (arg: A) => B
function pipe<A> (): (arg: A) => A
function pipe (...fns: any[]): any {
  return (initial: any) => fns.reduce(
    (arg, fn) => fn(arg),
    initial
  )
}

export default pipe
