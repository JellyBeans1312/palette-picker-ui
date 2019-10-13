export const projectReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return {id: action.id, project_name: action.project_name};
    default:
      return state;
  }
}

export const allProjectsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ALL_PROJECTS':
      return action.allProjects
    case 'REMOVE_PROJECT':
      return state.filter(project => project.id !== action.id)
    default:
      return state;
  }
}

export const editProjectNameReducer = (state = false, action) => {
  switch(action.type) {
    case 'UPDATE_PROJECT_NAME':
      return action.status
    default:
      return state
  }
}