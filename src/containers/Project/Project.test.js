import React from 'react';
import { shallow } from 'enzyme';
import { Project, mapDispatchToProps } from './Project';
import { addPalette, removePalette, removeProject, addProject } from '../../actions';

describe('Project', () => {
  it('should match snapshot', () => {
    const mockPalettes = [
      {
      id: 22,
      palette_name: "asdf",
      project_id: 50,
      color_one: "#67cd51",
      color_two: "#15fe0d",
      color_three: "#507dbb",
      color_four: "#784994",
      color_five: "#2570dd"
    },
    {
      id: 23,
      palette_name: "fdsa",
      project_id: 50,
      color_one: "#67cd51",
      color_two: "#15fe0d",
      color_three: "#507dbb",
      color_four: "#784994",
      color_five: "#2570dd"
    },
    {
      id: 21,
      palette_name: "afsd",
      project_id: 50,
      color_one: "#67cd51",
      color_two: "#15fe0d",
      color_three: "#507dbb",
      color_four: "#784994",
      color_five: "#2570dd"
    }
  ]
    const wrapper = shallow(
    <Project
      props={{
        id: 1,
        project_name: 'pants',
        created_at: '2',
        updated_at: '3'
      }}
      palettes={mockPalettes}
      addPalette={jest.fn()}
      removePalette={jest.fn()}
      removeProject={jest.fn()}
      addProject={jest.fn()}
    />)

    expect(wrapper).toMatchSnapshot()
  });
  describe('mapDispatchToProps', () => {
    it('should call action addPalette', () => {
      const mockPalette = {
        id: 1,
        palette_name: 'something'
      };
      const mockDispatch = jest.fn();
      const actionToDispatch = addPalette(mockPalette);
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addPalette(mockPalette);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
    it('should call action removePalette', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = removePalette(1);
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removePalette(1);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
    it('should call action addProject', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addProject('pants', 1);
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addProject('pants', 1);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
    it('should call action removeProject', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = removeProject(1);
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeProject(1);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})