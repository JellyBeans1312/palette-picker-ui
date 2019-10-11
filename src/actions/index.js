export const addProject = id => ({
  type: 'ADD_PROJECT',
  id
});

export const addAllProjects = allProjects => ({
  type: 'ADD_ALL_PROJECTS',
  allProjects
});

export const saveColors = colors => ({
  type: 'SAVE_COLORS',
  colors
});