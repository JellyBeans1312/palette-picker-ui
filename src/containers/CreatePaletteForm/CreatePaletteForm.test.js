import React from 'react';
import { shallow } from 'enzyme';
import { CreatePaletteForm, mapDispatchToProps, mapStateToProps } from './CreatePaletteForm';
import { addAllProjects, addAllPalettes, addPalette, addProject } from '../../actions';

describe('Create Palette Form', () => {
  let wrapper;
  const mockColors = [{}]
  const mockProject = {}
  const mockAllProjects=[{}]

  beforeEach(() => {
    wrapper = shallow(
      <CreatePaletteForm
        colors={mockColors}
        project={mockProject}
        allProjects={mockAllProjects}
        addAllPalettes={jest.fn()}
        addAllProjects={jest.fn()}
        addPalette={jest.fn()}
        addProject={jest.fn()}
      />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})