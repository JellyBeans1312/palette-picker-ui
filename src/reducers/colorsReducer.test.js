import { colorsReducer } from './colorsReducer';

describe('colorsReducer', () => {
  it('should return the default state', () => {
    let expected = [];

    let result = colorsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action.color if state.length === 5', () => {
    let expected = '#fff';

    let mockAction = {
      type: 'SAVE_COLOR',
      color: '#fff'
    }

    let result = colorsReducer([{}, {}, {}, {}, {}], mockAction);

    expect(result).toEqual(expected);
  });

  it('should')
});