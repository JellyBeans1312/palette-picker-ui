export const createProject = async (newProject) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch('https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects', options)
  if(!response.ok && response.status === 409) {
    throw Error('That project name already exists. Please choose another name.')
  } else if (!response.ok) {
    throw Error('There was an issue creating your project. Please try again.')
  }

  const data = await response.json();
  return data;
}

export const getAllProjects = async () => {
  const response = await fetch('https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects');
  if(!response.ok) {
    throw Error('There was an error retrieving your projects. Please try again.')
  }
  const data = await response.json()
  return data;
}

export const getAllPalettes = async () => {
  const response = await fetch('https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes')
  if(!response.ok) {
    throw Error('There was an error retrieving your palettes. Please try again.')
  }
  const data = await response.json();
  return data;
}

export const createPalette = async (newPalette) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newPalette),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch('https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes', options)
  if(!response.ok) {
    throw Error('There was an error creating your palette. Please try again.')
  }
  const data = await response.json();
  return data;
}

export const deletePalette = async (id) => {
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(`https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes/${id}`, options)
  if(!response.ok) {
    throw Error('There was an error deleting your palette. Please try again.')
  }

  return response.status;
}

export const deleteProject = async (id) => {
  const options = {
    method: 'DELETE'
  }
  const response = await fetch(`https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects/${id}`, options)
  if(!response.ok) {
    throw Error('There was an error deleting your project. Please try again.')
  }
  return response.status
}

export const patchProject = async (project_name, id) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(project_name),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch(`https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects/${id}`, options)
  if(!response.ok) {
    throw Error('There was an error editing your project. Please try again.')
  }
  const data = await response.json();
  return data;
}

export const patchPalette = async (palette) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(palette),
    headers: {
      "Content-Type": "application/json",
    }
  }
  const { id } = palette;
  const response = await fetch(`https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes/${id}`, options)
  if(!response.ok) {
    throw Error('There was an error editing your palette. Please try again.')
  }
  const data = await response.json();
  return data;
}

export const searchSpecificPalette = async (paletteName) => {
  const response = await fetch(`https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes?palette_name=${paletteName}`)
  if(!response.ok) {
    throw Error('There was an error getting your palette. Please try again.')
  }
  const data = await response.json();
  const { id, palette_name, created_at, updated_at, ...newPalette } = data[0];
  return newPalette
}