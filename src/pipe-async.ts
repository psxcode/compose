function pipeAsync<A, B, C, D, E, F, G, H, I> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C, fn2: (arg: C) => Promise<D> | D, fn3: (arg: D) => Promise<E> | E, fn4: (arg: E) => Promise<F> | F, fn5: (arg: F) => Promise<G> | G, fn6: (arg: G) => Promise<H> | H, fn7: (arg: H) => Promise<I> | I): (arg: A) => Promise<I>
function pipeAsync<A, B, C, D, E, F, G, H> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C, fn2: (arg: C) => Promise<D> | D, fn3: (arg: D) => Promise<E> | E, fn4: (arg: E) => Promise<F> | F, fn5: (arg: F) => Promise<G> | G, fn6: (arg: G) => Promise<H> | H): (arg: A) => Promise<H>
function pipeAsync<A, B, C, D, E, F, G> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C, fn2: (arg: C) => Promise<D> | D, fn3: (arg: D) => Promise<E> | E, fn4: (arg: E) => Promise<F> | F, fn5: (arg: F) => Promise<G> | G): (arg: A) => Promise<G>
function pipeAsync<A, B, C, D, E, F> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C, fn2: (arg: C) => Promise<D> | D, fn3: (arg: D) => Promise<E> | E, fn4: (arg: E) => Promise<F> | F): (arg: A) => Promise<F>
function pipeAsync<A, B, C, D, E> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C, fn2: (arg: C) => Promise<D> | D, fn3: (arg: D) => Promise<E> | E): (arg: A) => Promise<E>
function pipeAsync<A, B, C, D> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C, fn2: (arg: C) => Promise<D> | D): (arg: A) => Promise<D>
function pipeAsync<A, B, C> (fn0: (arg: A) => Promise<B> | B, fn1: (arg: B) => Promise<C> | C): (arg: A) => Promise<C>
function pipeAsync<A, B> (fn0: (arg: A) => Promise<B> | B): (arg: A) => Promise<B>
function pipeAsync<A> (): (arg: A) => Promise<A>
function pipeAsync (...fns: any[]): any {
  return (initial: any) => fns.reduce(
    (arg, fn) => arg.then(fn),
    Promise.resolve(initial)
  )
}

export default pipeAsync
