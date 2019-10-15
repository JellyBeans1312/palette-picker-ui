import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<ColorContainer 
      generateNewColors={jest.fn()}
      colors={
        [
          {color: "#493c4d", isLocked: false},
          { color: "#567c4d", isLocked: false },
          { color: "#493c4f", isLocked: false },
          { color: "#493c67", isLocked: false },
          { color: "#FFFFFF", isLocked: false }
        ]
      }
      updatePalette={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});