import { combineReducers } from 'redux';
import { projectReducer, allProjectsReducer } from './projectReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  allProjects: allProjectsReducer
});

export default rootReducer;