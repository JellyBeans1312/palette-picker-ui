import React from 'react';
import { shallow } from 'enzyme';
import { CreatePaletteForm, mapDispatchToProps, mapStateToProps } from './CreatePaletteForm';
import { addAllProjects, addAllPalettes, addPalette, addProject } from '../../actions';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createPalette, getAllProjects, getAllPalettes, searchSpecificPalette } from '../../util/apiCalls';

configure({ adapter: new Adapter() });

jest.mock('../../util/apiCalls')

describe('Create Palette Form', () => {
  let wrapper;
  const mockColors = [
    {
      color:"#fff",
      isLocked:false
    },
    {
      color:"#000",
      isLocked:false
    },
    {
      color:"#ececec",
      isLocked:false
    },
    {
      color:"#aeaeae",
      isLocked:false
    },
    {
      color:"#d8d646",
      isLocked:false
    }
]

  const mockPalette = {
    id:24,
    palette_name:"sdf",
    project_id:50,
    color_one:"#67cd51",
    color_two:"#15fe0d",
    color_three:"#507dbb",
    color_four:"#784994",
    color_five:"#2570dd",
    created_at:"2019-10-15T01:54:56.793Z",
    updated_at:"2019-10-15T01:54:56.793Z",
  }
  const mockProject = {
    id: 50,
    project_name:"asdf"
  }
  const mockAllProjects=[{
    id:50,
    project_name:"Aidan's fantastic project",
    created_at:"2019-10-15T02:16:24.923Z",
    updated_at:"2019-10-15T02:16:24.923Z"
  }]

  let mockEvent;

  beforeAll(() => {
    searchSpecificPalette.mockImplementation(() => mockPalette)
    createPalette.mockImplementation(() => mockPalette.id)
    getAllPalettes.mockImplementation(() => mockPalette)
    getAllProjects.mockImplementation(() => mockAllProjects)

  })

  const mockAddProject = jest.fn()
  const mockAddAllPalettes = jest.fn()
  const mockAddAllProjects = jest.fn()
  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn()}
    wrapper = shallow(
      <CreatePaletteForm
        colors={mockColors}
        project={mockProject}
        allProjects={mockAllProjects}
        addAllPalettes={mockAddAllPalettes}
        addAllProjects={mockAddAllProjects}
        addPalette={jest.fn()}
        addProject={mockAddProject}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call handleChange on change of palette name input and update state', () => {
    const mockEvent = {
      target: { value: 'palette', name:'paletteName' }
    }
    wrapper.find('.form-input').at(0).simulate('change', mockEvent);
    expect(wrapper.state('paletteName')).toEqual('palette')
  });

  it('should call handleChange on change of palette name search and update state', () => {
    const mockEvent = {
      target: { value: 'palette', name:'searchPaletteName' }
    }
    wrapper.find('.form-input').at(1).simulate('change', mockEvent);
    expect(wrapper.state('searchPaletteName')).toEqual('palette')
  });

  it('should call addAll projects, addAllPalettes', async () => {
    await wrapper.instance().savePalette(mockEvent);
    expect(mockAddAllPalettes).toHaveBeenCalled();
    expect(mockAddAllProjects).toHaveBeenCalled();
  })

  it('should call addProject when search palette is invoked', async () => {
    await wrapper.instance().searchPalette(mockEvent);

    expect(mockAddProject).toHaveBeenCalled()
  });

  describe("mapStateToProps", () => {
    it("should return a project with id", () => {
      const mockState = {
        project: mockProject
      };
      const expected = {
        project: mockProject
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    it("should return an array with colors", () => {
      const mockState = {
        colors: mockColors
      };
      const expected = {
        colors: mockColors
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });

    it("should return an array with projects", () => {
      const mockState = {
        allProjects: mockAllProjects
      };
      const expected = {
        allProjects: mockAllProjects
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with an addAllProjects action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addAllProjects(mockAllProjects);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAllProjects(mockAllProjects);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("calls dispatch with an addAllPalettes action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addAllPalettes(mockColors);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAllPalettes(mockColors);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("calls dispatch with an addPalette action", () => {
      const mockPalette = {
        id:21,
        palette_name:"asdf",
        project_id:50,
        color_one:"#67cd51",
        color_two:"#15fe0d",
        color_three:"#507dbb",
        color_four:"#784994",
        color_five:"#2570dd",
        created_at:"2019-10-15T01:54:46.520Z",
        updated_at:"2019-10-15T01:54:46.520Z"
      }
      const mockDispatch = jest.fn();
      const actionToDispatch = addPalette(mockPalette);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPalette(mockPalette);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
      it("calls dispatch with an addProject action", () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = addProject(mockProject);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.addProject(mockProject);
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })
    })
})