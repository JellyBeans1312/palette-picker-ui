export const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ALL_PALETTES':
      return action.palettes
    case 'REMOVE_PALETTE':
      return state.filter(palette => palette.id !== action.id)
    default: 
      return state
  }
}