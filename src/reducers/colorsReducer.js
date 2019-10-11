export const colorsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_COLORS':
      return action.colors;
    default: 
      return state;
  }
}