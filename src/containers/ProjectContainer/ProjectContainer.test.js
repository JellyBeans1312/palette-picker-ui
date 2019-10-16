import React from 'react';
import { shallow } from 'enzyme';
import { ProjectContainer, mapStateToProps } from './ProjectContainer';

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

  describe('matchStateToProps', () => {
    const mockState = {
      project: 1,
      allProjects: [
        {
          id: 51,
          project_name: "Aidan's fantastic project"
        },
        {
          id: 52,
          project_name: "Eric's great project"
        }
      ],
      colors: [
        { color: '#c1434f', isLocked: false },
        { color: '#fff', isLocked: false },
        { color: '#000', isLocked: false },
        { color: '#1ca0f', isLocked: false },
        { color: '#757ab1', isLocked: false },
      ],
      allPalettes: [
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
      ],
      editingProjectName: false
    }

    let expected = {
      allProjects: [
        {
          id: 51,
          project_name: "Aidan's fantastic project"
        },
        {
          id: 52,
          project_name: "Eric's great project"
        }
      ],
      allPalettes: [
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
    }

    let mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});