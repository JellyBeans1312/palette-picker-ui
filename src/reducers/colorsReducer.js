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
        if(colorObj.color === action.color) {
          return {...colorObj, isLocked: !colorObj.isLocked}
        } else {
          return colorObj
        }
      })
      return updatedColors
    case 'ADD_PALETTE':
      const paletteId = action.palette.id
      const { id, ...newPalette } = action.palette
      const keys = Object.keys(newPalette) 
      let colors = keys.map(key => {
        return { color: action.palette[key], isLocked: true, id: paletteId }
      });
      return colors
    default: 
      return state;
  }
}