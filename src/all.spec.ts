import { expect } from 'chai'
import all from './all'
import pipe from './pipe'

const add = (arg0: number) => (arg1: number) => arg0 + arg1
const mult = (arg0: number) => (arg1: number) => arg0 * arg1
const constant = <T> (arg: T) => (): T => arg
const toString = (arg: any) => `${arg}`
const toNumber = (arg: string) => Number(arg)
const noop = () => {}

describe('[ all ]', () => {
  it('should return the void function', () => {
    const piped = all()
    const res = piped()
    expect(res).deep.eq([])
  })

  it('should work with the void function', () => {
    const piped = all(noop)
    const res = piped()
    expect(res).deep.eq([undefined])
  })

  it('should work with a constant function', () => {
    const piped = all(constant(10))
    const res = piped()
    expect(res).deep.eq([10])
  })

  it('should work with one function', () => {
    const piped = all(add(2))
    const res = piped(2)
    expect(res).deep.eq([4])
  })

  it('should work with multiple functions', () => {
    const piped = all(constant(10), add(2), toString)
    const res = piped(4)
    expect(res).deep.eq([10, 6, '4'])
  })

  it('should work with functions returning different type', () => {
    const piped = all(toNumber, pipe(toNumber, mult(10)))
    const res = piped('10')
    expect(res).deep.eq([10, 100])
  })
})
