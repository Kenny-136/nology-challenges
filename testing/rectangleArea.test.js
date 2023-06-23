// test("check that jest is set up correct", () => {
//   expect(true).toBe(true)
// })
import { rectangleArea } from "./rectangleArea";
const negativeZerorError = new Error('height and width should be greater than 0')
const paramsTypeError = new Error('height and width need to be numbers')
const invalidArgumentNumber = new Error("One or more parameters are missing");

describe('test cases for a rectangle area functiom', () => {
  it('should calculate the area of a rectangle if given two positive numbers', () => {
    expect(rectangleArea(2,3)).toBe(6)
    expect(rectangleArea(100,120)).toBe(12000)
    expect(rectangleArea(2.1,1.2)).toBe(2.52)
  })

  it('should throw an error if height or width are 0 or a negative number', () => {
    expect(() => {rectangleArea(-2, -6)}).toThrow(negativeZerorError); // Extra Function with curly bracket inside expect to pass the test when throwing errors
    expect(() => {rectangleArea(-1, 3)}).toThrow(negativeZerorError)
    expect(() => {rectangleArea(1, 0)}).toThrow(negativeZerorError)
    })

  it('should throw an error if height / widht is not a number', () => {
    expect(() => {rectangleArea('hi', 'hello')}).toThrow(paramsTypeError)
    expect(() => {rectangleArea(0, 'hello')}).toThrow(paramsTypeError)
  })

  it('should throw an error if less than 2 parameters are passed' , () => {
    expect(() => {rectangleArea(1)}).toThrow(invalidArgumentNumber)
    expect(() => {rectangleArea('string')}).toThrow(invalidArgumentNumber)
    expect(() => {rectangleArea(-1)}).toThrow(invalidArgumentNumber)
    expect(() => {rectangleArea()}).toThrow(invalidArgumentNumber)
  })
})