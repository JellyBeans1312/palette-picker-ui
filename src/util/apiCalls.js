export const createProject = async (newProject) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch('https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects', options)
  if(!response.ok) {
    throw Error('There was an error creating your project. Please try again.')
  }

  const data = await response.json();
  return data;
}