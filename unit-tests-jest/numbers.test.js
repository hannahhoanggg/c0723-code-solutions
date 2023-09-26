import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('return even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('empty array', () => {
    const empty = [];
    const result = evenNumbers(empty);
    expect(result).toEqual([]);
  });
  it('return negative even numbers', () => {
    const numbers = [-2, 4, -6, 8];
    const result = evenNumbers(numbers);
    expect(result).toEqual([-2, 4, -6, 8]);
  });
});

describe('toDollars', () => {
  it('converts integers to dollars', () => {
    const number = 5;
    const result = toDollars(number);
    expect(result).toEqual('$5.00');
  });
  it('should round amount to two decimal places', () => {
    const number = 5.6721;
    const result = toDollars(number);
    expect(result).toEqual('$5.67');
  });
  it('should format negative amount', () => {
    const number = -7.899;
    const result = toDollars(number);
    expect(result).toEqual('$-7.90');
  });
});

describe('divideBy', () => {
  it('divide numbers by divisor', () => {
    const numbers = [10, 20, 30, 40];
    const divisor = 10;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('divide number by 0', () => {
    const numbers = [10, 20, 30, 40];
    const divisor = 0;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([Infinity, Infinity, Infinity, Infinity]);
  });
  it('divide negative number by divisor', () => {
    const numbers = [-10, -20, -30, -40];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([-2, -4, -6, -8]);
  });
});

describe('multiplyBy', () => {
  it('multiple number values of object by the multiplier', () => {
    const obj = {
      a: 2,
      b: 3,
      c: 5,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    const answer = {
      a: 4,
      b: 6,
      c: 10,
    };
    expect(result).toEqual(answer);
  });
  it('should handle non-numeric values', () => {
    const obj = {
      a: 'hello',
      b: 5,
      c: 'world',
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    const answer = {
      a: undefined,
      b: 10,
      c: undefined,
    };
    expect(result).toEqual(answer);
  });
  it('multiple by negative numbers', () => {
    const obj = {
      a: -2,
      b: 7,
      c: -5,
    };
    const multiplier = 3;
    const result = multiplyBy(obj, multiplier);
    const answer = {
      a: -6,
      b: 21,
      c: -15,
    };
    expect(result).toEqual(answer);
  });
});
