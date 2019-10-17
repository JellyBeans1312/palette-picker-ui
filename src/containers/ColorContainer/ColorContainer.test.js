import React from 'react';
import { shallow } from 'enzyme';
import { ColorContainer, mapStateToProps }  from './ColorContainer';

describe('ColorContainer', () => {
  let wrapper, mockUpdatePalette, mockGenerateNewColors;

  beforeEach(() => {
    mockUpdatePalette = jest.fn();
    mockGenerateNewColors = jest.fn();
    wrapper = shallow(<ColorContainer
      generateNewColors={jest.fn()}
      colors={
        [
          { color: "#493c4d", isLocked: false },
          { color: "#567c4d", isLocked: false },
          { color: "#493c4f", isLocked: false },
          { color: "#493c67", isLocked: false },
          { color: "#FFFFFF", isLocked: false }
        ]
      }
      generateNewColors={mockGenerateNewColors}
      updatePalette={mockUpdatePalette}
      editingPalette={true}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should call generateNewColors when the Generate a new palette button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(mockGenerateNewColors).toHaveBeenCalled();
  });

  it('should call updatePalette when the Update Palette button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');

    expect(mockUpdatePalette).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {

    it('should return an object with the correct parts of state', () => {
      let mockState = {
        project: '',
        allProjects: [
          {
            id: 1,
            project_name: 'test'
          }
        ],
        colors: [
          {color: '#000'}
        ],
        allPalettes: [
          {name: 'testPalette', color_one: '#fff'}
        ],
        editingProjectName: false,
        editingPalette: false
      }
      let expected = {editingPalette: false}
  
      let mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected)
    });
  });
});