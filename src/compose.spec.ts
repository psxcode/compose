import { expect } from 'chai'
import compose from './compose'

const add = (arg0: number) => (arg1: number): number => arg0 + arg1
const mult = (arg0: number) => (arg1: number): number => arg0 * arg1
const constant = <T> (arg: T) => () => arg
const toString = (arg: any): string => `${arg}`
const toNumber = (arg: string): number => Number(arg)

describe('[ compose ]', () => {
  it('should return the identity function', () => {
    const piped = compose()
    expect(piped(1)).eq(1)
  })

  it('should work with a discarding constant function', () => {
    const piped = compose(toString, constant(10), add(2))
    expect(piped(2)).eq('10')
  })

  it('should work with one function', () => {
    const piped = compose(add(2))
    expect(piped(2)).eq(4)
  })

  it('should work with two functions', () => {
    const piped = compose(mult(10), add(2))
    expect(piped(0)).eq(20)
  })

  it('should work with functions returning different type', () => {
    const piped = compose(toString, mult(10))
    expect(piped(1)).eq('10')
  })

  it('should work with functions returning different type', () => {
    const piped = compose(mult(10), toNumber)
    expect(piped('10')).eq(100)
  })
})
