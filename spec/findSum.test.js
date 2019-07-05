const findSum = require('../findSum');

describe('findSum', () => {
  test('should return false when passed an empty array', () => {
    expect(findSum([], 5)).toBe(false)
    expect(findSum(5)).toBe(false)
  })
  test('should return false when passed an array but no number', () => {
    expect(findSum([1, 2, 3])).toBe(false)
  });
  test('should return true when two numbers in the array amount to the number given', () => {
    expect(findSum([1, 2, 3], 4)).toBe(true);
    expect(findSum([1, 2, 3], 3)).toBe(true);
    expect(findSum([1, 2, 3, 5, 7, 8, 9], 15)).toBe(true)
  });
  test('should return false when no two numbers in the array amount to the number given', () => {
    expect(findSum([1, 2, 3], 6)).toBe(false);
    expect(findSum([1, 2, 3], 7)).toBe(false);
    expect(findSum([1, 2, 3, 5, 7, 8, 9], 132)).toBe(false)
  });
});

