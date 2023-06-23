import { sum } from "./sum-tdd";

describe('test cases for sum function', () => {
  const nanError = new Error('One or more parameters are not a number.')
  const emptyArgumentsError = new Error('no arguments are passed')

  it('should throw an error if no arguments are passed', () => {
    expect(() => {sum()}).toThrow(emptyArgumentsError)
  })

  it('should throw an error if any of arguments is not a number', () => {
    expect(() => {sum(1,'hello','world',4,5)}).toThrow(nanError)
  })
  
  it('should sum any numbers of arguments', () => {
    expect(sum(1,2,3)).toBe(6)
    expect(sum(1)).toBe(1)
    expect(sum(1,2,3,4,5,6,7,8,9,10)).toBe(55)
  })
})