import React from 'react';
import { shallow } from 'enzyme';
import { ColorRhombus } from './ColorRhombus';
import { mapDispatchToProps } from './ColorRhombus';
import { lockColor } from '../../actions'

describe('Color Rhombus', () => {
  it('should match snapshot', () => {
    const wrapper = shallow (<ColorRhombus 
      props={{
        color: '#fff',
        lockColor: jest.fn()
      }}
    />)

    expect(wrapper).toMatchSnapshot()
  });
  describe('mapDispatchToProps', () => {
    it('should call action lock color', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = lockColor('#fff');
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.lockColor('#fff');
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});