export const projectReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return action.id;
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