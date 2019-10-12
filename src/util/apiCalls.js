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