import { combineReducers } from 'redux';
import { projectReducer, allProjectsReducer } from './projectReducer';
import { colorsReducer } from './colorsReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  allProjects: allProjectsReducer,
  colors: colorsReducer,
});

export default rootReducer;