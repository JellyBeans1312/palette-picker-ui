import { addProject, addAllProjects, saveColor, lockColor } from './index';

describe('Actions', () => {
  it('should have a type of ADD_PROJECT', () => {
    let id = 1;
    let project_name = 'Project name';

    let expectedAction = {
      type: 'ADD_PROJECT',
      id,
      project_name
    }

    expect(addProject(project_name, id)).toEqual(expectedAction);
  });

  it('should have a type of addAllProjects', () => {
    let allProjects = [
      {
        id: 51,
        project_name: "Aidan's fantastic project"
      },
      {
        id: 52,
        project_name: "Eric's great project"
      }
    ];

    let expectedAction = {
      type: 'ADD_ALL_PROJECTS',
      allProjects
    }

    expect(addAllProjects(allProjects)).toEqual(expectedAction);
  });

  it('should have a type of SAVE_COLOR', () => {
    let color = '#fff';

    let expectedAction = {
      type: 'SAVE_COLOR',
      color
    }

    expect(saveColor(color)).toEqual(expectedAction);
  });

  it('should have a type of LOCK_COLOR', () => {
    let color = {color: 'fff', isLocked: false}

    let expectedAction = {
      type: 'LOCK_COLOR',
      color
    }

    expect(lockColor(color)).toEqual(expectedAction);
  });
});