import { addProject, addAllProjects, saveColor, lockColor, addAllPalettes, addPalette, removePalette, removeProject, updateProjectName, removeCurrentProject, editingPalette } from './index';

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
  
  it('should have a type of ADD_ALL_PALETTES', () => {
    let palettes = [
      {
        color: 'something',
        palette_name: 'hello'
      },
      {
        color: 'something else',
        palette_name: 'hello too'
      }
    ];

    let expectedAction = {
      type: 'ADD_ALL_PALETTES',
      palettes
    }

    expect(addAllPalettes(palettes)).toEqual(expectedAction);
  });

  it('should have a type of ADD_PALETTES', () => {
   const palette =   {
    color: 'something',
    palette_name: 'hello'
  }

    let expectedAction = {
      type: 'ADD_PALETTE',
      palette
    }

    expect(addPalette(palette)).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_PALETTE', () => {
    let id = 1

    let expectedAction = {
      type: 'REMOVE_PALETTE',
      id
    }

    expect(removePalette(id)).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_PROJECT', () => {
    let id = 1


    let expectedAction = {
      type: 'REMOVE_PROJECT',
      id
    }

    expect(removeProject(id)).toEqual(expectedAction);
  });

  
  it('should have a type of UPDATE_PROJECT_NAME', () => {
    let status = true
    
    let expectedAction = {
      type: 'UPDATE_PROJECT_NAME',
      status
    }
    
    expect(updateProjectName(status)).toEqual(expectedAction);
  });
  
  it('should have a type of REMOVE_CURRENT_PROJECT', () => {
    
    let expectedAction = {
      type: 'REMOVE_CURRENT_PROJECT',
    }
    
    expect(removeCurrentProject()).toEqual(expectedAction);
  });
  
  it('should have a type of EDITING_PALETTE', () => {
    let status = true

    let expectedAction = {
      type: 'EDITING_PALETTE',
      status
    }

    expect(editingPalette(status)).toEqual(expectedAction);
  });
});