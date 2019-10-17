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

  });
});