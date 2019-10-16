import React from 'react';
import { shallow } from 'enzyme';
import { addProject, addAllProjects } from '../../actions/index';
import { AddNewProjectForm, mapDispatchToProps } from './AddNewProjectForm';

describe('AddNewProjectForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddNewProjectForm />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state when a change is detected in the input', () => {
    let mockEvent = {
      target: {
        name: 'projectName',
        value: 'New Project'
      }
    }

    wrapper.find('input').simulate('change', mockEvent);

    expect(wrapper.state('projectName')).toEqual('New Project');
  });

  it('should call handleSubmit when the Create Project button is clicked', () => {
    let mockEvent = {
      preventDefault: jest.fn()
    }

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(mockEvent);
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch with a project_name and id when addProject is called', () => {
      let mockProjectName = 'New Project';
      let mockId = 1;
      let mockDispatch = jest.fn();

      let actionToDispatch = addProject(mockProjectName, mockId);
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProject(mockProjectName, mockId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch with allProjects when addAllProjects is called', () => {
      let mockAllProjects = [
        {
          id: 51,
          project_name: "Aidan's fantastic project"
        },
        {
          id: 52,
          project_name: "Eric's great project"
        }
      ]
      let mockDispatch = jest.fn();

      let actionToDispatch = addAllProjects(mockAllProjects);
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAllProjects(mockAllProjects);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});