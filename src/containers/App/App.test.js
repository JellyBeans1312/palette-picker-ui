import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import { addAllProjects, addAllPalettes, addProject, updateProjectName, removeCurrentProject, saveColor } from '../../actions';
import { getAllProjects, getAllPalettes, patchProject } from '../../util/apiCalls';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../../util/apiCalls')

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  const mockProject = {
    id: 50,
    project_name:"asdf"
  }

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

const mockAllProjects=[{
  id:50,
  project_name:"Aidan's fantastic project",
  created_at:"2019-10-15T02:16:24.923Z",
  updated_at:"2019-10-15T02:16:24.923Z"
}]

const mockAllPalettes = [{
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
}]
  const mockFunction = jest.fn()

  beforeAll(() => {
    getAllPalettes.mockImplementation(() => mockAllPalettes)
    getAllProjects.mockImplementation(() => mockAllProjects)
    // patchPallete.mockImplementation(() => mockAllPalettes[0])
  })
  beforeEach(() => {
    wrapper = shallow(
      <App
        colors={mockColors}
        project={mockProject}
        allProjects={mockAllProjects}
        allPalettes={mockAllPalettes}
        addAllPalettes= {mockFunction}
        addAllProjects={mockFunction}
        addProject={mockFunction}
        removeCurrentProject={mockFunction}
        updateProjectName={mockFunction}
        saveColor={mockFunction}
        editingProjectName={true}
      />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call save color when generateNewColors is called', () => {
    wrapper.instance().generateNewColors();
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should call addAllProjects and addAllPalttes on updatePalette', async () => {
    await wrapper.instance().updatePalette(mockAllPalettes);
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should call updateProjectName when renameProject is called', () => {
    wrapper.instance().renameProject('hello', 1);
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should call update state when renameProject is called', () => {
    patchProject.mockImplementation(() => {
      throw 'whoops'
    })
    wrapper.instance().renameProject();
    expect(wrapper.state('error')).toEqual('whoops');
  });

  it('should call edit action on click of edit icon', () => {
    wrapper.find('img').at(0).simulate('click');
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should call delete action on click of trashcan icon', () => {
    wrapper.find('img').at(1).simulate('click');
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should call saveColor on hexCodeGenerator call', () => {
    wrapper.instance().hexCodeGenerator(mockColors)
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should call addProject / renameProject action  to be called on clik of button', () => {
    wrapper.find('button').simulate('click');
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should call handleChange when change happens on input', () => {
    const mockEvent = {
      target: { value: 'palette' }
    }
    wrapper.find('input').simulate('change', mockEvent);
    expect(wrapper.state('editedProjectName')).toEqual('palette')
  })

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

    it("should return a boolean with editingProjectName", () => {
      const mockState = {
        editingProjectName: true
      };
      const expected = {
        editingProjectName: true
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });

    it("should return an array with palettes", () => {
      const mockState = {
        allPalettes: mockAllPalettes
      };
      const expected = {
        allPalettes: mockAllPalettes
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
      const mockDispatch = jest.fn();
      const actionToDispatch = saveColor(mockColors[0]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveColor(mockColors[0]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

      it("calls dispatch with an addProject action", () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = addProject(mockProject);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.addProject(mockProject);
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })

      it("calls dispatch with an updateProjectName action", () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = updateProjectName(true);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.updateProjectName(true);
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })

      it("calls dispatch with an removeCurrentProject action", () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = removeCurrentProject();
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.removeCurrentProject();
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })
    })
})