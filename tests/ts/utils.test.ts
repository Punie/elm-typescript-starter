import { sum, product } from '../../src/lib/utils';

describe('sum', () => {
  test('default value', () => {
    expect(sum()).toBe(0);
  });

  test('actual sum', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});

describe('product', () => {
  test('default value', () => {
    expect(product()).toBe(1);
  });

  test('actual sum', () => {
    expect(product(1, 2, 3, 4, 5)).toBe(120);
  });
});
