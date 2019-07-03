import { dispatch } from '../../src/lib/elm';

jest.mock('../../src/elm/Main', () => {});

jest.spyOn(console, 'log').mockImplementation();

describe('dispatch', () => {
  test('Log Action', () => {
    dispatch({
      kind: 'log',
      value: 'Some log',
    });

    expect(console.log).toHaveBeenCalledWith('Some log');
  });

  test('Store Action', () => {
    dispatch({
      kind: 'store',
      value: 42,
    });

    expect(console.log).toHaveBeenCalledWith('Storing value: 42');
  });
});
