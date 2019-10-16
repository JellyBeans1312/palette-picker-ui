import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  const mockColors = [{}]
  const mockProject = {}
  const mockAllProjects=[{}]

  beforeEach(() => {
    wrapper = shallow(
      <App
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