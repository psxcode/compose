import { expect } from 'chai'
import composeAsync from './compose-async'

const add = (arg0: number) => (arg1: number): number => arg0 + arg1
const addAsync = (arg0: number) => (arg1: number): Promise<number> => Promise.resolve(arg0 + arg1)
const mult = (arg0: number) => (arg1: number): number => arg0 * arg1
const multAsync = (arg0: number) => (arg1: number): Promise<number> => Promise.resolve(arg0 * arg1)
const constant = <T> (arg: T) => () => arg
const toString = (arg: any): string => `${arg}`
const toNumber = (arg: string): number => Number(arg)
const throwing = (message: string) => (): any => {
  throw new Error(message)
}

describe('[ composeAsync ]', () => {
  it('should return async \'identity\' function', async () => {
    const piped = composeAsync()
    const res = await piped(1)
    expect(res).eq(1)
  })

  it('should work with a discarding \'constant\' function', async () => {
    const piped = composeAsync(toString, constant(10), add(2))
    expect(await piped(2)).eq('10')
  })

  it('should work with single sync function', async () => {
    const piped = composeAsync(add(2))
    const res = await piped(2)
    expect(res).eq(4)
  })

  it('should work with multiple sync functions', async () => {
    const piped = composeAsync(mult(10), add(2))
    const res = await piped(0)
    expect(res).eq(20)
  })

  it('should work with multiple async functions', async () => {
    const piped = composeAsync(multAsync(10), addAsync(2))
    const res = await piped(0)
    expect(res).eq(20)
  })

  it('should work with multiple sync functions with type conversion in between', async () => {
    const piped = composeAsync(toString, mult(10))
    const res = await piped(1)
    expect(res).eq('10')
  })

  it('should work with multiple functions with type conversion in between', async () => {
    const piped = composeAsync(toString, multAsync(10))
    const res = await piped(1)
    expect(res).eq('10')
  })

  it('should work with multiple sync functions with type conversion in between', async () => {
    const piped = composeAsync(multAsync(10), toNumber)
    const res = await piped('1')
    expect(res).eq(10)
  })

  it('should handle throwing function', async () => {
    const piped = composeAsync(throwing('error'))
    try {
      await piped({})
      expect.fail('should not reach this point')
    } catch (e) {
      expect(e.message).eq('error')
    }
  })

  it('should handle throwing function inside pipe', async () => {
    const piped = composeAsync(toString, throwing('error'), addAsync(2))
    try {
      await piped(42)
      expect.fail('should not reach this point')
    } catch (e) {
      expect(e.message).eq('error')
    }
  })
})
