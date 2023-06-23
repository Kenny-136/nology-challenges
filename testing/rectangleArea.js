export const rectangleArea = (width, height) => {
  if (height === undefined || width === undefined) {
    throw new Error("One or more parameters are missing");
  }
  if (typeof height!== 'number' || typeof width !== 'number') {
    throw new Error('height and width need to be numbers')
  }
  if (height <= 0 || width <= 0) {
    throw new Error('height and width should be greater than 0')
  }
  return width * height
}