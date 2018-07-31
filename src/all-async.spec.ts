import { expect } from 'chai'
import allAsync from './all-async'
import pipe from './pipe'

const add = (arg0: number) => (arg1: number): number => arg0 + arg1
const addAsync = (arg0: number) => (arg1: number): Promise<number> => Promise.resolve(arg0 + arg1)
const multAsync = (arg0: number) => (arg1: number): Promise<number> => Promise.resolve(arg0 * arg1)
const constant = <T> (arg: T) => () => arg
const toString = (arg: any): string => `${arg}`
const toNumber = (arg: string): number => Number(arg)
const noop = () => {}

describe('[ allAsync ]', () => {
  it('should return the void function', async () => {
    const piped = allAsync()
    const res = await piped()
    expect(res).deep.eq([])
  })

  it('should work with the void function', async () => {
    const piped = allAsync(noop)
    const res = await piped()
    expect(res).deep.eq([undefined])
  })

  it('should work with a constant function', async () => {
    const piped = allAsync(constant(10))
    const res = await piped()
    expect(res).deep.eq([10])
  })

  it('should work with one function', async () => {
    const piped = allAsync(add(2))
    const res = await piped(2)
    expect(res).deep.eq([4])
  })

  it('should work with multiple functions', async () => {
    const piped = allAsync(constant(10), addAsync(2), toString)
    const res = await piped(4)
    expect(res).deep.eq([10, 6, '4'])
  })

  it('should work with functions returning different type', async () => {
    const piped = allAsync(toNumber, pipe(toNumber, multAsync(10)))
    const res = await piped('10')
    expect(res).deep.eq([10, 100])
  })
})
