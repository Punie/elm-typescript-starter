import { sum } from '../../src/lib/utils';

describe('sum', () => {
  test('default value', () => {
    expect(sum()).toBe(0);
  });

  test('actual sum', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
