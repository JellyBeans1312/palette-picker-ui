import { projectReducer, allProjectsReducer, editProjectNameReducer } from './projectReducer';

describe('projectReducer', () => {
  it('should return the default state', () => {
    let expected = '';

    let result = projectReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an object with id, project_name', () => {
    let expected = {id: 1, project_name: 'test'}

    let mockAction = {
      type: 'ADD_PROJECT',
      id: 1,
      project_name: 'test'
    }

    let result = projectReducer('', mockAction);

    expect(result).toEqual(expected);
  });

  it('should return an empty string if REMOVE_CURRENT_PROJECT is selected', () => {
    let expected = '';
    
    let mockAction = {
      type: 'REMOVE_CURRENT_PROJECT'
    }

    let result = projectReducer({ id: 1, project_name: 'test' }, mockAction);

    expect(result).toEqual(expected);
  });
});

describe('allProjectsReducer', () => {
  it('should return the default state', () => {
    let expected = [];

    let result = allProjectsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return allprojects if ADD_ALL_PROJECTS is called', () => {
    let allProjects = [
      {
        project_name: 'test',
        id: 1
      },
      {
        project_name: 'test2',
        id: 2
      }
    ];

    let expected = [
      {
        project_name: 'test',
        id: 1
      },
      {
        project_name: 'test2',
        id: 2
      }
    ]

    let mockAction = {
      type: 'ADD_ALL_PROJECTS',
      allProjects
    }

    let result = allProjectsReducer([], mockAction);

    expect(result).toEqual(expected);
  });

  it('should delete a project from state if REMOVE_PROJECT is called', () => {
    let mockState = [
      {
        project_name: 'test',
        id: 1
      },
      {
        project_name: 'test2',
        id: 2
      }
    ];

    let expected = [
      {
        project_name: 'test',
        id: 1
      }
    ];

    let mockAction = {
      type: 'REMOVE_PROJECT',
      id: 2
    }

    let result = allProjectsReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});

describe('editProjectNameReducer', () => {
  it('should return the default state', () => {
    let expected = false;

    let result = editProjectNameReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action.status if UPDATE_PROJECT_NAME is called', () => {
    let expected = true;

    let mockAction = {
      type: 'UPDATE_PROJECT_NAME',
      status: true
    }

    let result = editProjectNameReducer(false, mockAction);

    expect(result).toEqual(expected);
  });
});