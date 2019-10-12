import { combineReducers } from 'redux';
import { projectReducer, allProjectsReducer } from './projectReducer';
import { colorsReducer } from './colorsReducer';
import { palettesReducer } from './palettesReducer'

const rootReducer = combineReducers({
  project: projectReducer,
  allProjects: allProjectsReducer,
  colors: colorsReducer,
  allPalettes: palettesReducer
});

export default rootReducer;