export const colorsReducer = (state = [], action) => {
  switch(action.type) {
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
    default: 
      return state;
  }
}