export const addProject = id => ({
  type: 'ADD_PROJECT',
  id
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
})