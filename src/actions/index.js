export const addProject = (project_name, id) => ({
  type: 'ADD_PROJECT',
  id,
  project_name
});

export const addAllProjects = allProjects => ({
  type: 'ADD_ALL_PROJECTS',
  allProjects
});

export const saveColor = color => ({
  type: 'SAVE_COLOR',
  color
});

export const lockColor = color => ({
  type: 'LOCK_COLOR',
  color
});

export const addAllPalettes = palettes => ({
  type: 'ADD_ALL_PALETTES',
  palettes
});

export const addPalette = palette => ({
  type: 'ADD_PALETTE',
  palette
});

export const removePalette = id => ({
  type: 'REMOVE_PALETTE',
  id
});

export const removeProject = id => ({
  type: 'REMOVE_PROJECT',
  id
});

export const updateProjectName = status => ({
  type: 'UPDATE_PROJECT_NAME',
  status
})