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

  it('should add a color to state if state.length < 5', () => {
    let expected = [{}, {}, {}, {}, {color: '#fff', isLocked: false}];

    let mockAction = {
      type: 'SAVE_COLOR',
      color: { color: '#fff', isLocked: false }
    }
    let result = colorsReducer([{}, {}, {}, {}], mockAction);

    expect(result).toEqual(expected);
  });

  it('should lock a color if the color matches a color in state', () => {
    let expected = [{ color: '#fff', isLocked: false }, { color: '#aaa', isLocked: false }, { color: '#ddddd', isLocked: false }, { color: '#fc54ad', isLocked: false }, { color: '#000', isLocked: true }];

    let mockAction = {
      type: 'LOCK_COLOR',
      color: { color: '#000', isLocked: false }
    }
  
    let result = colorsReducer([{ color: '#fff', isLocked: false }, { color: '#aaa', isLocked: false }, { color: '#ddddd', isLocked: false }, { color: '#fc54ad', isLocked: false }, { color: '#000', isLocked: true }], mockAction);
  
    expect(result).toEqual(expected);
  });

  it('should return a palette', () => {
    let expected = [
      {
        color: '#000',
        isLocked: true,
        id: 5
      },
      {
        color: '#aaa',
        isLocked: true,
        id: 5
      },
      {
        color: '#bbb',
        isLocked: true,
        id: 5
      },
      {
        color: '#ccc',
        isLocked: true,
        id: 5
      },
      {
        color: '#fff',
        isLocked: true,
        id: 5
      }
    ];

    let mockAction = {
      type: 'ADD_PALETTE',
      palette: {
        id: 5,
        color_one: '#000',
        color_two: '#aaa',
        color_three: '#bbb',
        color_four: '#ccc',
        color_five: '#fff'
      }
    }

    let result = colorsReducer([], mockAction);

    expect(result).toEqual(expected);
  });
});