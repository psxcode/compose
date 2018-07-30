import { expect } from 'chai'
import pipe from './pipe'

const add = (arg0: number) => (arg1: number): number => arg0 + arg1
const mult = (arg0: number) => (arg1: number): number => arg0 * arg1
const constant = <T> (arg: T) => () => arg
const toString = (arg: any): string => `${arg}`
const toNumber = (arg: string): number => Number(arg)

describe('[ pipe ]', () => {
  it('should return the identity function', () => {
    const piped = pipe<number>()
    const res = piped(1)
    expect(res).eq(1)
  })

  it('should work with a discarding constant function', () => {
    const piped = pipe(add(2), constant(10), toString)
    const res = piped(2)
    expect(res).eq('10')
  })

  it('should work with one function', () => {
    const piped = pipe(add(2))
    expect(piped(2)).eq(4)
  })

  it('should work with two functions', () => {
    const piped = pipe(add(2), mult(10))
    expect(piped(0)).eq(20)
  })

  it('should work with functions returning different type', () => {
    const piped = pipe(mult(10), toString)
    expect(piped(1)).eq('10')
  })

  it('should work with functions returning different type', () => {
    const piped = pipe(toNumber, mult(10))
    expect(piped('10')).eq(100)
  })
})
