export const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ALL_PALETTES':
      return action.palettes
    default: 
      return state
  }
}