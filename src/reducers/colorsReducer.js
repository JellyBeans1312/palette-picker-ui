export const colorsReducer = (state = [], action) => {
  switch(action.type) {
<<<<<<< HEAD
    case 'SAVE_COLOR':
      if(state.length === 5) {
        return action.color
      } else {
        return [...state, action.color];
      }
    case 'LOCK_COLOR':
      const updatedColors = state.map(colorObj => {
        console.log('COLOROBJ', action)
        if(colorObj.color === action.color) {
          return {...colorObj, isLocked: !colorObj.isLocked}
        } else {
          return colorObj
        }
      })
      console.log("UPDATED COLORS", updatedColors)
      return updatedColors
=======
    case 'SAVE_COLORS':
      return action.colors;
>>>>>>> 19c4aafa53d87e7ea8f41b9065ebec0ea14c0235
    default: 
      return state;
  }
}