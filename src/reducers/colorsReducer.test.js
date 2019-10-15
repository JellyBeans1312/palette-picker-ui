import { colorsReducer } from './colorsReducer';

describe('colorsReducer', () => {
  it('should return the default state', () => {
    let expected = [];

    let result = colorsReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});