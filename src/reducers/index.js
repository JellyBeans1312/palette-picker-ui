import { combineReducers } from 'redux';
import { projectReducer, allProjectsReducer, editProjectNameReducer } from './projectReducer';
import { colorsReducer } from './colorsReducer';
import { palettesReducer, editingPaletteReducer } from './palettesReducer'

const rootReducer = combineReducers({
  project: projectReducer,
  allProjects: allProjectsReducer,
  colors: colorsReducer,
  allPalettes: palettesReducer,
  editingProjectName: editProjectNameReducer,
  editingPalette: editingPaletteReducer
});

export default rootReducer;