import React from 'react';
import { shallow } from 'enzyme';
import { ProjectContainer } from './ProjectContainer';

describe('ProjectContainer', () => {
  let wrapper, mockAllProjects, mockAllPalettes;

  beforeEach(() => {
    mockAllProjects = [
      {id: 51, 
        project_name: "Aidan's fantastic project"
      },
      {
        id: 52,
        project_name: "Eric's great project"
      }
    ]
    mockAllPalettes = [
      {
        id: 21,
        palette_name: "asdf",
        project_id: 50,
        color_one: "#67cd51",
        color_two: "#15fe0d",
        color_three: "#507dbb",
        color_four: "#784994",
        color_five: "#2570dd"
      }
    ]
    wrapper = shallow(<ProjectContainer 
      allProjects={mockAllProjects}
      allPalettes={mockAllPalettes}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});